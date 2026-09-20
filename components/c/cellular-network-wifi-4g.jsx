import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yad7robrr.css';
import '../../css/c/cy4gz4bsy.css';
import '../../css/r/raithdb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yad7robrr"/><path class="cy4gz4bsy"/><path class="raithdb3u"/></g>`,
		"fallback": "streamline-freehand:cellular-network-wifi-4g",
	});
}

export default Component;
