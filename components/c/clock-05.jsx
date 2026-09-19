import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z25keebkf.css';
import '../../css/n/nuepdeb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z25keebkf"/><path class="nuepdeb-h"/></g>`,
		"fallback": "hugeicons:clock-05",
	});
}

export default Component;
