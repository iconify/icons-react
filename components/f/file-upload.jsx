import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h-hrcfb_r.css';
import '../../css/e/euxrlwbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h-hrcfb_r"/><path class="euxrlwbzn"/></g>`,
		"fallback": "hugeicons:file-upload",
	});
}

export default Component;
