import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d976pzb-k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d976pzb-k"/>`,
		"fallback": "dinkie-icons:grid-small",
	});
}

export default Component;
