import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd5ezhnwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd5ezhnwl"/>`,
		"fallback": "selfhst:aiometadata-light",
	});
}

export default Component;
