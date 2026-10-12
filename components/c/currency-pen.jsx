import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ovwmvqkna.css';
import '../../css/c/ch6gofp9q.css';
import '../../css/x/x2s0qejsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ovwmvqkna"/><path class="ch6gofp9q"/><path class="x2s0qejsf"/></g>`,
		"fallback": "andrsrxn:currency-pen",
	});
}

export default Component;
