import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e1m2v8b6w.css';
import '../../css/l/lf62mbcbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e1m2v8b6w"/><path class="lf62mbcbg"/></g>`,
		"fallback": "hugeicons:ai-image-01",
	});
}

export default Component;
