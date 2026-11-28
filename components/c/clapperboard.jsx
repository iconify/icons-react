import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clngo6w0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clngo6w0s"/>`,
		"fallback": "noviair:clapperboard",
	});
}

export default Component;
