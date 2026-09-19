import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsw5pew7x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hsw5pew7x"/>`,
		"fallback": "garden:circle-sm-stroke-16",
	});
}

export default Component;
