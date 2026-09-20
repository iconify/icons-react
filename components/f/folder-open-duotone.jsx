import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut_yg9bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut_yg9bhm"/>`,
		"fallback": "keyline-icons:folder-open-duotone",
	});
}

export default Component;
