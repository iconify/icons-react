import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr-iiqyqg.css';
import '../../css/f/f6p_znbqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr-iiqyqg"/><path class="f6p_znbqz"/>`,
		"fallback": "selfhst:bracket-dark",
	});
}

export default Component;
