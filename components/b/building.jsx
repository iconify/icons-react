import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by1mcejmw.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by1mcejmw"/>`,
		"fallback": "fa6-regular:building",
	});
}

export default Component;
