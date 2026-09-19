import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f5mkz9bge.css';
import '../../css/h/hovcbxdmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f5mkz9bge"/><path class="hovcbxdmx"/></g>`,
		"fallback": "hugeicons:instagram",
	});
}

export default Component;
