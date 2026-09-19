import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1a17le6m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1a17le6m"/>`,
		"fallback": "carbon:facility-group",
	});
}

export default Component;
