import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndp0sdb3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndp0sdb3s"/>`,
		"fallback": "raphael:dribbble",
	});
}

export default Component;
