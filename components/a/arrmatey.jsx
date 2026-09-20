import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxbal7btp.css';
import '../../css/n/nyoqeib7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxbal7btp"/><path class="nyoqeib7u"/>`,
		"fallback": "selfhst:arrmatey",
	});
}

export default Component;
