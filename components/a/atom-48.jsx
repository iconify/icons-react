import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5c_hurfl.css';
import '../../css/o/oevu3r_8x.css';
import '../../css/k/koo_zccjj.css';
import '../../css/i/ijomgmbue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5c_hurfl"/><path class="oevu3r_8x"/><path class="koo_zccjj"/><path class="ijomgmbue"/>`,
		"fallback": "energy-icons:atom-48",
	});
}

export default Component;
