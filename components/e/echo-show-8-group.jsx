import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv8gugehk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv8gugehk"/>`,
		"fallback": "cbi:echo-show-8-group",
	});
}

export default Component;
