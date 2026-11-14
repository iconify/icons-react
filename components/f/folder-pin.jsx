import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/giajsqbyq.css';
import '../../css/o/okbm3716n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="giajsqbyq"/><path class="okbm3716n"/></g>`,
		"fallback": "hugeicons:folder-pin",
	});
}

export default Component;
