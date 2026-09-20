import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erihghbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erihghbta"/>`,
		"fallback": "octicon:briefcase-24",
	});
}

export default Component;
