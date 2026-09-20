import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq__7v1lc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq__7v1lc"/>`,
		"fallback": "selfhst:easypanel-light",
	});
}

export default Component;
