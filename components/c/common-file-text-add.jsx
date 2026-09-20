import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j9j4az32b.css';
import '../../css/s/s1d6m6bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j9j4az32b"/><path class="s1d6m6bqv"/></g>`,
		"fallback": "streamline-ultimate:common-file-text-add",
	});
}

export default Component;
