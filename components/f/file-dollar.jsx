import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f7ok_kqmj.css';
import '../../css/e/etsvcwb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f7ok_kqmj"/><path class="etsvcwb7f"/></g>`,
		"fallback": "hugeicons:file-dollar",
	});
}

export default Component;
