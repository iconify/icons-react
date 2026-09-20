import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt-2qd5ac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt-2qd5ac"/>`,
		"fallback": "ix:audio-description1",
	});
}

export default Component;
