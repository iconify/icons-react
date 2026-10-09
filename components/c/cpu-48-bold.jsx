import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdierubwu.css';
import '../../css/t/tte9pybuc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdierubwu"/><path class="tte9pybuc"/>`,
		"fallback": "energy-icons:cpu-48-bold",
	});
}

export default Component;
