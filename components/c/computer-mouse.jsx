import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_gzs5-5i.css';
import '../../css/u/uso-shb_f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y_gzs5-5i"/><path class="uso-shb_f"/></g>`,
		"fallback": "fluent-emoji-flat:computer-mouse",
	});
}

export default Component;
