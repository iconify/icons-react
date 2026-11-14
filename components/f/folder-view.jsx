import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z5jq7eatv.css';
import '../../css/j/jsl_plbqj.css';
import '../../css/b/b-4r_xb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z5jq7eatv"/><path class="jsl_plbqj"/><path class="b-4r_xb9h"/></g>`,
		"fallback": "hugeicons:folder-view",
	});
}

export default Component;
