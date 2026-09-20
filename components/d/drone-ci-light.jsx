import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-u70hkkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-u70hkkg"/>`,
		"fallback": "selfhst:drone-ci-light",
	});
}

export default Component;
