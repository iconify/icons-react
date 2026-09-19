import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2j38clag.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2j38clag"/>`,
		"fallback": "entypo:arrow-with-circle-down",
	});
}

export default Component;
