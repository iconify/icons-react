import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opxm96fzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opxm96fzt"/>`,
		"fallback": "energy-icons:component-48",
	});
}

export default Component;
