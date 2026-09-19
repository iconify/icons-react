import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3oc3o71y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r3oc3o71y"/>`,
		"fallback": "heroicons:arrow-turn-right-down-16-solid",
	});
}

export default Component;
