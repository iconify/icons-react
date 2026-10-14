import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf0dqmblf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf0dqmblf"/>`,
		"fallback": "selfhst:conduyt-light",
	});
}

export default Component;
