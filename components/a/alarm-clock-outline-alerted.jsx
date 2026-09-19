import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a519wcbzu.css';
import '../../css/b/bhe6xabkp.css';
import '../../css/j/j1n636w8v.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a519wcbzu clr-i-outline--alerted clr-i-outline-path-1--alerted"/><path class="bhe6xabkp clr-i-outline--alerted clr-i-outline-path-2--alerted"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted j1n636w8v"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:alarm-clock-outline-alerted",
	});
}

export default Component;
