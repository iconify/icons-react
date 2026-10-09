import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnzsb3g7n.css';
import '../../css/n/ngz04xzwl.css';
import '../../css/g/gum8373jm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnzsb3g7n"/><path class="ngz04xzwl"/><path class="gum8373jm"/>`,
		"fallback": "energy-icons:arrow-up-down-48-bold",
	});
}

export default Component;
