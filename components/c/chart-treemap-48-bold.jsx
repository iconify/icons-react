import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thy5cttev.css';
import '../../css/t/t8l47cczo.css';
import '../../css/n/nke47iyqw.css';
import '../../css/y/y8h9w-q9d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thy5cttev"/><path class="t8l47cczo"/><path class="nke47iyqw"/><path class="y8h9w-q9d"/>`,
		"fallback": "energy-icons:chart-treemap-48-bold",
	});
}

export default Component;
