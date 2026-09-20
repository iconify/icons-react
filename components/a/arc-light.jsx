import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo1-5mpqh.css';

const viewBox = {"width":62,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qo1-5mpqh"/>`,
		"fallback": "thesvg-color:arc-light",
	});
}

export default Component;
