import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf8q0slyc.css';
import '../../css/u/ukroeg7me.css';
import '../../css/e/emfunmbju.css';
import '../../css/f/f76sgsh0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf8q0slyc"/><path class="ukroeg7me"/><path class="emfunmbju"/><path class="f76sgsh0r"/>`,
		"fallback": "ion:finger-print",
	});
}

export default Component;
