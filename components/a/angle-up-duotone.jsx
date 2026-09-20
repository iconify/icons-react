import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bofd2xzrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bofd2xzrt"/>`,
		"fallback": "stash:angle-up-duotone",
	});
}

export default Component;
