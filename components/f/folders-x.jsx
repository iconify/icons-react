import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gul0xinhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gul0xinhb"/>`,
		"fallback": "noviair-light:folders-x",
	});
}

export default Component;
