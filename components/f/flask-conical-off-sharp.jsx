import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw124pgac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw124pgac"/>`,
		"fallback": "keyline-icons:flask-conical-off-sharp",
	});
}

export default Component;
