import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lfmha0bkj.css';
import '../../css/u/ug9u4gh7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lfmha0bkj"/><path class="ug9u4gh7k"/></g>`,
		"fallback": "streamline-ultimate:body-care-cream",
	});
}

export default Component;
