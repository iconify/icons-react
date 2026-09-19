import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azhh47bcr.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azhh47bcr"/>`,
		"fallback": "fa6-brands:behance-square",
	});
}

export default Component;
