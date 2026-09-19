import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gkqjbzbqs.css';
import '../../css/a/av_l230gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gkqjbzbqs"/><path class="av_l230gv"/></g>`,
		"fallback": "hugeicons:conversation",
	});
}

export default Component;
