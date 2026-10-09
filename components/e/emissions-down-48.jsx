import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf8qgfbqp.css';
import '../../css/w/w77re0b_b.css';
import '../../css/q/qbufteb1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf8qgfbqp"/><path class="w77re0b_b"/><path class="qbufteb1n"/>`,
		"fallback": "energy-icons:emissions-down-48",
	});
}

export default Component;
