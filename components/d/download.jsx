import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e__0vq20f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e__0vq20f"/>`,
		"fallback": "entypo:download",
	});
}

export default Component;
