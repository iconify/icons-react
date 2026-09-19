import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv82ee2qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv82ee2qw"/>`,
		"fallback": "iconoir:behance",
	});
}

export default Component;
