import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tty_6yy-t.css';
import '../../css/o/ot82azbfv.css';
import '../../css/z/zhfwy2bbl.css';
import '../../css/o/o_vwuj4ss.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tty_6yy-t"/><path class="ot82azbfv"/><path class="zhfwy2bbl"/><path class="o_vwuj4ss"/>`,
		"fallback": "energy-icons:biomass-20-bold",
	});
}

export default Component;
