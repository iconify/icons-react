import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk7emmcdk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk7emmcdk"/>`,
		"fallback": "entypo:clipboard",
	});
}

export default Component;
