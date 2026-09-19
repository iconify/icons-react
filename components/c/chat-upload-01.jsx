import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_z-ctyxs.css';
import '../../css/a/aua0i6bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o_z-ctyxs"/><path class="aua0i6bem"/></g>`,
		"fallback": "hugeicons:chat-upload-01",
	});
}

export default Component;
