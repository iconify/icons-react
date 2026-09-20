import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/demyu2alk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="demyu2alk"/>`,
		"fallback": "selfhst:akaunting-light",
	});
}

export default Component;
