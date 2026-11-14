import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fmej89b4w.css';
import '../../css/h/hnyfp36zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fmej89b4w"/><path class="hnyfp36zw"/></g>`,
		"fallback": "hugeicons:archive-restore",
	});
}

export default Component;
