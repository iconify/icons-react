import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hun5gnd_j.css';
import '../../css/j/jh9opkozm.css';
import '../../css/j/j5lerzb3y.css';
import '../../css/s/skly4o5tg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hun5gnd_j"/><path class="jh9opkozm"/><path class="j5lerzb3y"/><path class="skly4o5tg"/>`,
		"fallback": "energy-icons:chart-treemap-48",
	});
}

export default Component;
