import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4geewbmp.css';
import '../../css/e/e57f5cgnd.css';
import '../../css/l/lo0zzvbev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4geewbmp"/><path class="e57f5cgnd"/><path class="lo0zzvbev"/>`,
		"fallback": "energy-icons:ballot-box-48-bold",
	});
}

export default Component;
