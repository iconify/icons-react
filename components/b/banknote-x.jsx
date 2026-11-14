import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cgfunjbue.css';
import '../../css/m/mbh8a7n3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cgfunjbue"/><path class="mbh8a7n3r"/></g>`,
		"fallback": "hugeicons:banknote-x",
	});
}

export default Component;
