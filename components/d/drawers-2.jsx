import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qis63gbyu.css';
import '../../css/i/i581nacij.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qis63gbyu"/><path class="i581nacij"/></g>`,
		"fallback": "marketeq:drawers-2",
	});
}

export default Component;
