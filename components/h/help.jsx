import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zyteidb8v.css';
import '../../css/y/y5xttol5i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="zyteidb8v"/><path class="y5xttol5i"/></g>`,
		"fallback": "marketeq:help",
	});
}

export default Component;
