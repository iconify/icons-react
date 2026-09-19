import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgxvwt_3e.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgxvwt_3e"/>`,
		"fallback": "ps:ambulance",
	});
}

export default Component;
