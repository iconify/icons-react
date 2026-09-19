import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iww3bo28l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iww3bo28l"/>`,
		"fallback": "carbon:base-document-set",
	});
}

export default Component;
