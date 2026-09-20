import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x61kpmbew.css';
import '../../css/x/xs7teru1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x61kpmbew"/><path class="xs7teru1d"/></g>`,
		"fallback": "keyline-icons:git-arrow-right-fill",
	});
}

export default Component;
