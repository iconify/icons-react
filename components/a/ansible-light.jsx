import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cft0r1bwv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cft0r1bwv"/>`,
		"fallback": "selfhst:ansible-light",
	});
}

export default Component;
