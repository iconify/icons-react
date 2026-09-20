import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fhqwuubkk.css';
import '../../css/g/g6dz7kb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fhqwuubkk"/><path class="g6dz7kb2h"/></g>`,
		"fallback": "reicon:bag-shopping",
	});
}

export default Component;
