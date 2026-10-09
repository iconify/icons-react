import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir025xb6j.css';
import '../../css/k/kgirabbda.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir025xb6j"/><path class="kgirabbda"/>`,
		"fallback": "energy-icons:dispatch-48",
	});
}

export default Component;
