import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k466ambil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k466ambil"/>`,
		"fallback": "streamline-logos:funimation-logo-solid",
	});
}

export default Component;
