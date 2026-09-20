import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sk8vevout.css';
import '../../css/j/j_roh9boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sk8vevout"/><path class="j_roh9boo"/></g>`,
		"fallback": "mage:gem-stone",
	});
}

export default Component;
