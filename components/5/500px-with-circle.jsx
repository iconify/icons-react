import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j03_z294p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j03_z294p"/>`,
		"fallback": "entypo-social:500px-with-circle",
	});
}

export default Component;
