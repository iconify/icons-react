import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xja2x8adm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xja2x8adm"/>`,
		"fallback": "entypo:arrow-bold-down",
	});
}

export default Component;
