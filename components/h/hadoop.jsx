import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dupyj627c.css';
import '../../css/k/ktm1oebij.css';
import '../../css/i/isim6mblg.css';
import '../../css/h/h7ir0wg9q.css';
import '../../css/c/c3zf2ccth.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dupyj627c"/><path class="ktm1oebij"/><path class="isim6mblg"/><path class="h7ir0wg9q"/><path class="c3zf2ccth"/>`,
		"fallback": "devicon:hadoop",
	});
}

export default Component;
