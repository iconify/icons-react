import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi18t8sbh.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi18t8sbh"/>`,
		"fallback": "fa6-solid:calculator",
	});
}

export default Component;
