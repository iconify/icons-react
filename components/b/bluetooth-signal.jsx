import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geq4cpb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="geq4cpb4q"/>`,
		"fallback": "griddy-icons:bluetooth-signal",
	});
}

export default Component;
