import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4160sb9u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4160sb9u"/>`,
		"fallback": "entypo:folder-images",
	});
}

export default Component;
