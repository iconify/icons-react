import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw68vba5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw68vba5i"/>`,
		"fallback": "mdi:dome-light",
	});
}

export default Component;
