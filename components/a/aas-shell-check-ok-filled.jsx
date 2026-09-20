import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh6wr9bwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh6wr9bwb"/>`,
		"fallback": "ix:aas-shell-check-ok-filled",
	});
}

export default Component;
