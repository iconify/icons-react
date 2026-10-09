import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhlt4li1n.css';
import '../../css/e/e69-qmb1n.css';
import '../../css/t/t08y0ccaw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhlt4li1n"/><path class="e69-qmb1n"/><path class="t08y0ccaw"/>`,
		"fallback": "energy-icons:fingerprint-20",
	});
}

export default Component;
