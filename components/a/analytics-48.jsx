import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwrb__blp.css';
import '../../css/t/tp6desghj.css';
import '../../css/o/o7vde7bur.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwrb__blp"/><path class="tp6desghj"/><path class="o7vde7bur"/>`,
		"fallback": "energy-icons:analytics-48",
	});
}

export default Component;
