import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggbg5jbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggbg5jbso"/>`,
		"fallback": "thesvg:anthropic",
	});
}

export default Component;
