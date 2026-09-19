import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu221abpe.css';
import '../../css/r/r4hkkkb6r.css';
import '../../css/i/iq67862zl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu221abpe"/><path class="r4hkkkb6r"/><path class="iq67862zl"/>`,
		"fallback": "fxemoji:acorn",
	});
}

export default Component;
