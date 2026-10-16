import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fscbk5btm.css';
import '../../css/i/i1rcpxbal.css';
import '../../css/l/lk_wy274k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fscbk5btm"/><path class="i1rcpxbal"/><path class="lk_wy274k"/>`,
		"fallback": "energy-icons:gangway-20-bold",
	});
}

export default Component;
