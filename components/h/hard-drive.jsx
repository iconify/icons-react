import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3th3mb1k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3th3mb1k"/>`,
		"fallback": "zondicons:hard-drive",
	});
}

export default Component;
