import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0yys_sjp.css';
import '../../css/g/g3j-8gbsj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0yys_sjp"/><path class="g3j-8gbsj"/>`,
		"fallback": "energy-icons:home-battery-48",
	});
}

export default Component;
