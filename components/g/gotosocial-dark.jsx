import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh775pm9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh775pm9u"/>`,
		"fallback": "selfhst:gotosocial-dark",
	});
}

export default Component;
