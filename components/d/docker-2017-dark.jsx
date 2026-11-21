import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3w1srb8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3w1srb8r"/>`,
		"fallback": "selfhst:docker-2017-dark",
	});
}

export default Component;
