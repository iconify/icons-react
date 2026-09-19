import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyjuwwbmv.css';
import '../../css/n/nv_u-tbfc.css';
import '../../css/k/k7hknob4f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wyjuwwbmv"/><path class="nv_u-tbfc"/><path class="k7hknob4f"/></g>`,
		"fallback": "fluent-emoji-flat:fountain-pen",
	});
}

export default Component;
