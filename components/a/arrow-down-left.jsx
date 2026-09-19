import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ack00vbez.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ack00vbez"/>`,
		"fallback": "charm:arrow-down-left",
	});
}

export default Component;
