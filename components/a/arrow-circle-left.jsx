import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fhvfp_bvz.css';
import '../../css/f/ftat9xxjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fhvfp_bvz"/><path class="ftat9xxjt"/></g>`,
		"fallback": "reicon:arrow-circle-left",
	});
}

export default Component;
