import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfv_tdfee.css';
import '../../css/e/ebopsbb7e.css';
import '../../css/g/gna13kh2l.css';
import '../../css/t/tcg3wkbmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfv_tdfee"/><path class="ebopsbb7e"/><path class="gna13kh2l"/><path class="tcg3wkbmi"/>`,
		"fallback": "energy-icons:drill-press-48-bold",
	});
}

export default Component;
