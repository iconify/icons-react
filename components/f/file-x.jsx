import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m275f1bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m275f1bxv"/>`,
		"fallback": "keyline-icons:file-x",
	});
}

export default Component;
