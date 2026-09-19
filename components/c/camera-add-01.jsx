import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nixbvpbpf.css';
import '../../css/d/dhf1elbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nixbvpbpf"/><path class="dhf1elbus"/></g>`,
		"fallback": "hugeicons:camera-add-01",
	});
}

export default Component;
