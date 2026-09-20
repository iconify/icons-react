import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrj-3pr-l.css';
import '../../css/a/alzpy97nw.css';
import '../../css/w/w0xawxcgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrj-3pr-l"/><path class="alzpy97nw"/><path class="w0xawxcgs"/>`,
		"fallback": "streamline-ultimate:charging-flash-wifi-bold",
	});
}

export default Component;
