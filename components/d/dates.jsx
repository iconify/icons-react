import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bwlz-_lem.css';
import '../../css/t/t2mokvbsr.css';
import '../../css/n/ninu6dbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bwlz-_lem"/><path class="t2mokvbsr"/><path class="ninu6dbzw"/></g>`,
		"fallback": "hugeicons:dates",
	});
}

export default Component;
