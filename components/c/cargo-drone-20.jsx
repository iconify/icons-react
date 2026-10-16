import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv118o9ri.css';
import '../../css/w/wrw3ncchb.css';
import '../../css/c/ckd-ucc8g.css';
import '../../css/s/s-8_n-eys.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv118o9ri"/><path class="wrw3ncchb"/><path class="ckd-ucc8g"/><path class="s-8_n-eys"/>`,
		"fallback": "energy-icons:cargo-drone-20",
	});
}

export default Component;
