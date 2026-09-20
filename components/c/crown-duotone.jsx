import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue8808q3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue8808q3e"/>`,
		"fallback": "stash:crown-duotone",
	});
}

export default Component;
