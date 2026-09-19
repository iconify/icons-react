import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1pp5bbhs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1pp5bbhs"/>`,
		"fallback": "carbon:chemistry",
	});
}

export default Component;
