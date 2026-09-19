import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7bct-bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7bct-bml"/>`,
		"fallback": "cbi:duco-3",
	});
}

export default Component;
