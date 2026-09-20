import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehi7-zo8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehi7-zo8u"/>`,
		"fallback": "selfhst:compreface-light",
	});
}

export default Component;
