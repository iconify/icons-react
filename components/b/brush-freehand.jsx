import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsbj687dq.css';
import '../../css/a/aib90vbtg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsbj687dq"/><path class="aib90vbtg"/>`,
		"fallback": "carbon:brush-freehand",
	});
}

export default Component;
