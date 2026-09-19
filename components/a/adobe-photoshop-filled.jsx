import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilx1rbbag.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilx1rbbag"/>`,
		"fallback": "dinkie-icons:adobe-photoshop-filled",
	});
}

export default Component;
