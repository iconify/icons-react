import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohf2_-0nb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohf2_-0nb"/>`,
		"fallback": "whh:cloudsync",
	});
}

export default Component;
