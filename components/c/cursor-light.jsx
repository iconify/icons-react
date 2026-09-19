import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nib1krcfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nib1krcfm"/>`,
		"fallback": "iconamoon:cursor-light",
	});
}

export default Component;
