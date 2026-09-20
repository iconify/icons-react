import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwgzr4b-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwgzr4b-a"/>`,
		"fallback": "roentgen:buses",
	});
}

export default Component;
