import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dswdeubsf.css';
import '../../css/j/jfstv-bgx.css';
import '../../css/f/fajgjy8bi.css';
import '../../css/d/d3mkw_b_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dswdeubsf"/><path class="jfstv-bgx"/><path class="fajgjy8bi"/><path class="d3mkw_b_b"/>`,
		"fallback": "energy-icons:chart-polar-48",
	});
}

export default Component;
