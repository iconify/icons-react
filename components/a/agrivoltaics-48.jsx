import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gujha0nye.css';
import '../../css/g/gujrcchun.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/e/ezx2ctbsk.css';
import '../../css/v/vd0g7d3yo.css';
import '../../css/x/x2ogl_b6u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gujha0nye"/><path class="gujrcchun"/><path class="c65-ehvfy"/><path class="ezx2ctbsk"/><path class="vd0g7d3yo"/><path class="x2ogl_b6u"/>`,
		"fallback": "energy-icons:agrivoltaics-48",
	});
}

export default Component;
