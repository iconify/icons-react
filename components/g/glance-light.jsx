import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_x0bpb8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_x0bpb8j"/>`,
		"fallback": "selfhst:glance-light",
	});
}

export default Component;
