import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vzl_8_btf.css';
import '../../css/o/ozqgkwxtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vzl_8_btf"/><path class="ozqgkwxtu"/></g>`,
		"fallback": "hugeicons:ai-background-eraser",
	});
}

export default Component;
