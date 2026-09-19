import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ln0hz112o.css';
import '../../css/x/xfnm38bzl.css';
import '../../css/t/tu6_0_bai.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ln0hz112o"/><path class="xfnm38bzl"/><path class="tu6_0_bai"/></g>`,
		"fallback": "fluent-emoji-flat:biting-lip",
	});
}

export default Component;
