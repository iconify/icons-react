import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntzcl4b-u.css';
import '../../css/g/gjisevbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntzcl4b-u"/><path class="gjisevbwl"/>`,
		"fallback": "uim:google-hangouts",
	});
}

export default Component;
