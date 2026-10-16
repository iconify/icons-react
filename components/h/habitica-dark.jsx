import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6oqsc4sr.css';
import '../../css/h/h2_b95bkj.css';
import '../../css/w/wce7kccvg.css';

const viewBox = {"width":408,"height":76};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6oqsc4sr"/><path class="h2_b95bkj"/><path class="wce7kccvg"/>`,
		"fallback": "thesvg-color:habitica-dark",
	});
}

export default Component;
