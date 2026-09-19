import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug_jkob0b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug_jkob0b"/>`,
		"fallback": "entypo:globe",
	});
}

export default Component;
