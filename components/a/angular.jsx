import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz34tx__k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz34tx__k"/>`,
		"fallback": "la:angular",
	});
}

export default Component;
