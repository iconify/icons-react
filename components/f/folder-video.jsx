import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoh5rg3zj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoh5rg3zj"/>`,
		"fallback": "entypo:folder-video",
	});
}

export default Component;
