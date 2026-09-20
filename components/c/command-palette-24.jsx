import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cna79bboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cna79bboz"/>`,
		"fallback": "octicon:command-palette-24",
	});
}

export default Component;
