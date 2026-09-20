import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh_6pobhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh_6pobhs"/>`,
		"fallback": "mdi:asterisk-circle-outline",
	});
}

export default Component;
