import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qua-qqbze.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qua-qqbze"/>`,
		"fallback": "charm:chevrons-left",
	});
}

export default Component;
