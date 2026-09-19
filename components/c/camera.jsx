import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qrj6e5hdx.css';
import '../../css/c/cs-7h8fej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qrj6e5hdx"/><path class="cs-7h8fej"/></g>`,
		"fallback": "heroicons:camera",
	});
}

export default Component;
