import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9-ej8btt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w9-ej8btt"/>`,
		"fallback": "gravity-ui:circle-number-0",
	});
}

export default Component;
