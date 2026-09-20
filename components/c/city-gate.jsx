import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl32-54lk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl32-54lk"/>`,
		"fallback": "roentgen:city-gate",
	});
}

export default Component;
