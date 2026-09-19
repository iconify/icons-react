import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tu4mulbmj.css';
import '../../css/f/f5dyf_bxd.css';
import '../../css/t/t2siutbbu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tu4mulbmj"/><path class="f5dyf_bxd"/><path class="t2siutbbu"/></g>`,
		"fallback": "fluent-emoji-flat:bell-pepper",
	});
}

export default Component;
