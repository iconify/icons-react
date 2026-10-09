import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pycxs8orj.css';
import '../../css/x/xjuhbqb1b.css';
import '../../css/l/l3lpevbky.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pycxs8orj"/><path class="xjuhbqb1b"/><path class="l3lpevbky"/>`,
		"fallback": "energy-icons:calendar-x-48",
	});
}

export default Component;
