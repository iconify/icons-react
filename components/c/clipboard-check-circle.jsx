import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jtpr1vq3n.css';
import '../../css/r/rwch1289m.css';
import '../../css/q/q9xupgbzh.css';
import '../../css/g/g7rc37bep.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jtpr1vq3n"/><path class="rwch1289m"/><path class="q9xupgbzh"/><path class="g7rc37bep"/></g>`,
		"fallback": "pepicons:clipboard-check-circle",
	});
}

export default Component;
