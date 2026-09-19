import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so7ecdiom.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so7ecdiom"/>`,
		"fallback": "entypo:eye",
	});
}

export default Component;
