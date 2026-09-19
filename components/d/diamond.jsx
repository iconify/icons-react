import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4im9-bob.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4im9-bob"/>`,
		"fallback": "at-icons:diamond",
	});
}

export default Component;
