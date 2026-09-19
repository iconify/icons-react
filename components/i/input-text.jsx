import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rar4--bxa.css';
import '../../css/d/dxgvhvi1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rar4--bxa"/><path class="dxgvhvi1n"/></g>`,
		"fallback": "hugeicons:input-text",
	});
}

export default Component;
