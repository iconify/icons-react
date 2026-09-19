import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxcl3kb-l.css';
import '../../css/y/y-7_m5bwb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxcl3kb-l"/><path class="y-7_m5bwb"/>`,
		"fallback": "carbon:ai-generate",
	});
}

export default Component;
