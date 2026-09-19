import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9ucdabdt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9ucdabdt"/>`,
		"fallback": "entypo:infinity",
	});
}

export default Component;
