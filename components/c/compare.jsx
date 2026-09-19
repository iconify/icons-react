import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojznf3bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ojznf3bwh"/>`,
		"fallback": "griddy-icons:compare",
	});
}

export default Component;
