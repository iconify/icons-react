import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfxp86bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfxp86bew"/>`,
		"fallback": "iconoir:airplane-off",
	});
}

export default Component;
