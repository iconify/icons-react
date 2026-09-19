import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3kdhjb0k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3kdhjb0k"/>`,
		"fallback": "carbon:horizontal-line-dashed",
	});
}

export default Component;
