import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn8z88y2s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn8z88y2s"/>`,
		"fallback": "devicon-plain:erlang-wordmark",
	});
}

export default Component;
