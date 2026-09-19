import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veqsyyb0s.css';

const viewBox = {"width":368,"height":440};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veqsyyb0s"/>`,
		"fallback": "zmdi:evernote",
	});
}

export default Component;
