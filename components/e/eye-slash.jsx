import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qs5th2sbp.css';
import '../../css/j/j3zc7kn1m.css';
import '../../css/x/x3yzpi80d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qs5th2sbp"/><path class="j3zc7kn1m"/><path class="x3yzpi80d"/></g>`,
		"fallback": "charm:eye-slash",
	});
}

export default Component;
