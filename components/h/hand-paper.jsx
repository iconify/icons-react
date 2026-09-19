import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh9k4dl3y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh9k4dl3y"/>`,
		"fallback": "fa-regular:hand-paper",
	});
}

export default Component;
