import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww9cxtb3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww9cxtb3t"/>`,
		"fallback": "selfhst:bigcapital-light",
	});
}

export default Component;
