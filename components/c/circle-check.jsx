import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trme8kb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trme8kb-r"/>`,
		"fallback": "ci:circle-check",
	});
}

export default Component;
