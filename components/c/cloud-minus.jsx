import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6lkjeh9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p6lkjeh9f"/>`,
		"fallback": "reicon:cloud-minus",
	});
}

export default Component;
