import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9on4tfbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary y9on4tfbu"/>`,
		"fallback": "iconaut:git-pull-request-duotone",
	});
}

export default Component;
