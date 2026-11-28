import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op5mjb44o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op5mjb44o"/>`,
		"fallback": "noviair:cpu",
	});
}

export default Component;
