import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/irvwt5tdl.css';
import '../../css/z/z8fonhj7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="irvwt5tdl"/><path class="z8fonhj7f"/></g>`,
		"fallback": "hugeicons:crown",
	});
}

export default Component;
