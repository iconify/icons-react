import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi65ewbuy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi65ewbuy"/>`,
		"fallback": "entypo:align-left",
	});
}

export default Component;
