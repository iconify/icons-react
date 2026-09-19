import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj_zylnsm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj_zylnsm"/>`,
		"fallback": "ps:girl-smile",
	});
}

export default Component;
