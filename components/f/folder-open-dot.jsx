import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lnwkkybfu.css';
import '../../css/z/z230gtbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lnwkkybfu"/><path class="z230gtbyx"/></g>`,
		"fallback": "hugeicons:folder-open-dot",
	});
}

export default Component;
