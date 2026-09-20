import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0h5-obfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u0h5-obfa"/>`,
		"fallback": "thesvg:claude-code",
	});
}

export default Component;
