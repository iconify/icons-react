import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkved2b9z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkved2b9z"/>`,
		"fallback": "entypo:help-with-circle",
	});
}

export default Component;
