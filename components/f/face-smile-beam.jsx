import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6tal28ht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6tal28ht"/>`,
		"fallback": "fa6-solid:face-smile-beam",
	});
}

export default Component;
