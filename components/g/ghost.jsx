import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/ptu5npu7w.css';
import '../../css/t/txkbbj35b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ptu5npu7w"/><path class="txkbbj35b"/></g>`,
		"fallback": "hugeicons:ghost",
	});
}

export default Component;
