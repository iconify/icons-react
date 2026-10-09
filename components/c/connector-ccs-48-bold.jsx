import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avexz9b5g.css';
import '../../css/i/i5j29cx8h.css';
import '../../css/h/hjv36fv1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avexz9b5g"/><path class="i5j29cx8h"/><path class="hjv36fv1r"/>`,
		"fallback": "energy-icons:connector-ccs-48-bold",
	});
}

export default Component;
