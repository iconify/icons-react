import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2sf6sbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2sf6sbfl"/>`,
		"fallback": "ci:circle-check-outline",
	});
}

export default Component;
