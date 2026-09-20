import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wayr7zbfg.css';
import '../../css/c/c8pjq2bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="wayr7zbfg"/><path class="c8pjq2bdi"/></g>`,
		"fallback": "proicons:closed-captions",
	});
}

export default Component;
