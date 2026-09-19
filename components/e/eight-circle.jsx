import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/thzsuk59t.css';
import '../../css/g/g4zs08s-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="thzsuk59t"/><path class="g4zs08s-q"/></g>`,
		"fallback": "hugeicons:eight-circle",
	});
}

export default Component;
