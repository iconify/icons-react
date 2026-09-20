import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui5n0ibde.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui5n0ibde"/>`,
		"fallback": "jam:arrow-circle-down-f",
	});
}

export default Component;
