import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouio2lb8p.css';

const viewBox = {"width":8787.4,"height":6556.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouio2lb8p"/>`,
		"fallback": "thesvg-color:adobe-creative-cloud",
	});
}

export default Component;
