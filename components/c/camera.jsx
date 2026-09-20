import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gkzoq9u2i.css';
import '../../css/h/hf3x9qqco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gkzoq9u2i"/><path class="hf3x9qqco"/></g>`,
		"fallback": "mage:camera",
	});
}

export default Component;
