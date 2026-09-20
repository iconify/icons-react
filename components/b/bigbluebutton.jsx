import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frwz6gr7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frwz6gr7m"/>`,
		"fallback": "thesvg:bigbluebutton",
	});
}

export default Component;
