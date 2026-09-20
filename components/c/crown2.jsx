import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlyf48e1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlyf48e1g"/>`,
		"fallback": "reicon:crown2",
	});
}

export default Component;
