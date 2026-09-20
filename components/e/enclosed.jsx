import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt7xkpbeh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt7xkpbeh"/>`,
		"fallback": "selfhst:enclosed",
	});
}

export default Component;
