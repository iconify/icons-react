import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pycxs8orj.css';
import '../../css/o/oy7flk86j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pycxs8orj"/><path class="oy7flk86j"/>`,
		"fallback": "energy-icons:calendar-range-48",
	});
}

export default Component;
