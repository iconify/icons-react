import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8tn3nbmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8tn3nbmi"/>`,
		"fallback": "entypo:flow-tree",
	});
}

export default Component;
