import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhq6yjbhp.css';

const viewBox = {"width":1500,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhq6yjbhp"/>`,
		"fallback": "websymbol:code",
	});
}

export default Component;
