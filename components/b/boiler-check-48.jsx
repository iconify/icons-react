import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg2ap3bxj.css';
import '../../css/l/l5-kz1soe.css';
import '../../css/q/qdytrdbev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg2ap3bxj"/><path class="l5-kz1soe"/><path class="qdytrdbev"/>`,
		"fallback": "energy-icons:boiler-check-48",
	});
}

export default Component;
