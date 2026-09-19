import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im-34tlgo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im-34tlgo"/>`,
		"fallback": "dinkie-icons:cursor-arrow-small-filled",
	});
}

export default Component;
