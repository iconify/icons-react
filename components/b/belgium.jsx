import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_nhc2bkw.css';
import '../../css/w/wnghrmbmj.css';
import '../../css/c/cp7tt2bmi.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_nhc2bkw"/><path class="wnghrmbmj"/><path class="cp7tt2bmi"/>`,
		"fallback": "tabler-flags:belgium",
	});
}

export default Component;
