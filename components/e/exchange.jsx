import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3q8gnbah.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3q8gnbah"/>`,
		"fallback": "roentgen:exchange",
	});
}

export default Component;
