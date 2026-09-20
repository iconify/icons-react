import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaw5a66hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaw5a66hh"/>`,
		"fallback": "solar:arrow-left-down-linear",
	});
}

export default Component;
