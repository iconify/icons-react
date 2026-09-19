import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywb_xebdd.css';
import '../../css/d/d4flrw67a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ywb_xebdd"/><path class="d4flrw67a"/></g>`,
		"fallback": "hugeicons:group",
	});
}

export default Component;
