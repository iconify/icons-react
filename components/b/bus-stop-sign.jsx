import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3p8q1brp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3p8q1brp"/>`,
		"fallback": "roentgen:bus-stop-sign",
	});
}

export default Component;
