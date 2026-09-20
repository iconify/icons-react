import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ato2_p4nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ato2_p4nh"/>`,
		"fallback": "streamline-logos:500px-logo-1-block",
	});
}

export default Component;
