import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nmwywjbav.css';
import '../../css/d/d11htcssl.css';
import '../../css/e/eml-au9gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nmwywjbav"/><path class="d11htcssl"/><path class="eml-au9gd"/></g>`,
		"fallback": "streamline-ultimate:gesture-double-tap",
	});
}

export default Component;
