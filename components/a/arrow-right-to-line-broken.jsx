import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ue8ht3b0f.css';
import '../../css/y/y69324s2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ue8ht3b0f"/><path class="y69324s2k"/></g>`,
		"fallback": "solar:arrow-right-to-line-broken",
	});
}

export default Component;
