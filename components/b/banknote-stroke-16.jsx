import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw7r68gtj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw7r68gtj"/>`,
		"fallback": "garden:banknote-stroke-16",
	});
}

export default Component;
