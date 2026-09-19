import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dowbeobsa.css';
import '../../css/z/ziuz1w_mn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dowbeobsa"/><path class="ziuz1w_mn"/>`,
		"fallback": "fxemoji:banknotepound",
	});
}

export default Component;
