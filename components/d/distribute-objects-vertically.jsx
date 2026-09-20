import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwj4ck9iz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uwj4ck9iz"/>`,
		"fallback": "ix:distribute-objects-vertically",
	});
}

export default Component;
