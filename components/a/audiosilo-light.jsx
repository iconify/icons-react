import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be58yvdwt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be58yvdwt"/>`,
		"fallback": "selfhst:audiosilo-light",
	});
}

export default Component;
