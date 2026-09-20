import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlc4d9v9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rlc4d9v9p"/>`,
		"fallback": "streamline-logos:adobe-lightroom-logo-solid",
	});
}

export default Component;
