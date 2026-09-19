import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1tu19bmh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1tu19bmh"/>`,
		"fallback": "at-icons:gun",
	});
}

export default Component;
