import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnjcr8b9t.css';
import '../../css/v/v8g6tabng.css';
import '../../css/j/jjjiu_baa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnjcr8b9t"/><path class="v8g6tabng"/><path class="jjjiu_baa"/>`,
		"fallback": "energy-icons:circuit-breaker-48-bold",
	});
}

export default Component;
