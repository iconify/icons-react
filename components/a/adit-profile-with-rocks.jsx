import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7jygbgo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv7jygbgo"/>`,
		"fallback": "pinhead:adit-profile-with-rocks",
	});
}

export default Component;
