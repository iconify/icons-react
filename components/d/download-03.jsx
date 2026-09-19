import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z9o5dkevl.css';
import '../../css/g/g8hgixcvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z9o5dkevl"/><path class="g8hgixcvo"/></g>`,
		"fallback": "hugeicons:download-03",
	});
}

export default Component;
