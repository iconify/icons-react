import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi9vhsedn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yi9vhsedn"/>`,
		"fallback": "reicon:cloud-x",
	});
}

export default Component;
