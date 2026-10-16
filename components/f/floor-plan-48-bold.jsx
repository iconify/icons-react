import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3k4bybje.css';
import '../../css/e/eo7syfsuw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3k4bybje"/><path class="eo7syfsuw"/>`,
		"fallback": "energy-icons:floor-plan-48-bold",
	});
}

export default Component;
