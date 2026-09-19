import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2wzqxngm.css';
import '../../css/b/bb_4oobxv.css';
import '../../css/e/ej16q4bjl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2wzqxngm"/><path class="bb_4oobxv"/><path class="ej16q4bjl"/>`,
		"fallback": "formkit:expand",
	});
}

export default Component;
