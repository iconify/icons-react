import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsrxc5b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsrxc5b0r"/>`,
		"fallback": "simple-icons:furaffinity",
	});
}

export default Component;
