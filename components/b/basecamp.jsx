import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyyw8y90x.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyyw8y90x"/>`,
		"fallback": "ps:basecamp",
	});
}

export default Component;
