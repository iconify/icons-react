import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exsgpsb5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exsgpsb5v"/>`,
		"fallback": "selfhst:docassemble",
	});
}

export default Component;
