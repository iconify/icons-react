import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4jv04b5r.css';
import '../../css/l/l1d5of9bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o4jv04b5r"/><path class="l1d5of9bn"/></g>`,
		"fallback": "reicon:driving",
	});
}

export default Component;
