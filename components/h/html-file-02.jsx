import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uv6n38b2y.css';
import '../../css/t/teptysjpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uv6n38b2y"/><path class="teptysjpx"/></g>`,
		"fallback": "hugeicons:html-file-02",
	});
}

export default Component;
