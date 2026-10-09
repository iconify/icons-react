import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqje01ayu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqje01ayu"/>`,
		"fallback": "energy-icons:green-steel-48",
	});
}

export default Component;
