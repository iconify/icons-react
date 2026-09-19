import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7p-l9bws.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7p-l9bws"/>`,
		"fallback": "entypo:adjust",
	});
}

export default Component;
