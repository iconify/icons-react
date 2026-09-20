import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mu060xb3h.css';
import '../../css/j/jh16l738l.css';
import '../../css/f/fv8jzw-8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mu060xb3h"/><path class="jh16l738l"/><path class="fv8jzw-8y"/></g>`,
		"fallback": "reicon:grid-eraser",
	});
}

export default Component;
