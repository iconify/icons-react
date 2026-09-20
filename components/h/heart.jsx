import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1u70wbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1u70wbri"/>`,
		"fallback": "typcn:heart",
	});
}

export default Component;
