import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th5u_7n9l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th5u_7n9l"/>`,
		"fallback": "entypo-social:google-hangouts",
	});
}

export default Component;
