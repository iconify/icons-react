import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jgod2lmxo.css';
import '../../css/d/d34t52bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jgod2lmxo"/><path class="d34t52bcx"/></g>`,
		"fallback": "hugeicons:folder-root",
	});
}

export default Component;
