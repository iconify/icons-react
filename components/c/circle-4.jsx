import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayia89h2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayia89h2x"/>`,
		"fallback": "roentgen:circle-4",
	});
}

export default Component;
