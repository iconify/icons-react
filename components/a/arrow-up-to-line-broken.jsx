import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/urjv1kbgr.css';
import '../../css/m/mzpfazf1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="urjv1kbgr"/><path class="mzpfazf1m"/></g>`,
		"fallback": "solar:arrow-up-to-line-broken",
	});
}

export default Component;
