import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdqoy3z0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdqoy3z0g"/>`,
		"fallback": "weui:at-filled",
	});
}

export default Component;
