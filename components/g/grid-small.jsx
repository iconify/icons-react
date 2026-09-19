import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz7aj4fgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz7aj4fgu"/>`,
		"fallback": "ci:grid-small",
	});
}

export default Component;
