import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bttwagbwd.css';
import '../../css/j/j3kp4bb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bttwagbwd"/><path class="j3kp4bb3b"/></g>`,
		"fallback": "hugeicons:file-unlocked",
	});
}

export default Component;
