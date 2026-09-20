import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo696l5nf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo696l5nf"/>`,
		"fallback": "la:image",
	});
}

export default Component;
