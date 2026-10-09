import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf8qgfbqp.css';
import '../../css/w/w77re0b_b.css';
import '../../css/i/idneaybyo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf8qgfbqp"/><path class="w77re0b_b"/><path class="idneaybyo"/>`,
		"fallback": "energy-icons:emissions-up-48",
	});
}

export default Component;
