import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqcs72gla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yqcs72gla"/>`,
		"fallback": "basil:battery-low-solid",
	});
}

export default Component;
