import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwjvlwbdi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwjvlwbdi"/>`,
		"fallback": "devicon-plain:centos",
	});
}

export default Component;
