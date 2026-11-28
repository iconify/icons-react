import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaryj4bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaryj4bxc"/>`,
		"fallback": "noviair-light:eject",
	});
}

export default Component;
