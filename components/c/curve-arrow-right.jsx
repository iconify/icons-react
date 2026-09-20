import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/isbyqjb6w.css';
import '../../css/w/wzlnflbig.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="isbyqjb6w"/><path class="wzlnflbig"/></g>`,
		"fallback": "marketeq:curve-arrow-right",
	});
}

export default Component;
