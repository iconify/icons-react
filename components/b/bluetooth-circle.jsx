import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3m-qj0tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3m-qj0tw"/>`,
		"fallback": "reicon:bluetooth-circle",
	});
}

export default Component;
