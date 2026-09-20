import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v__r6ltsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v__r6ltsu"/>`,
		"fallback": "octicon:grabber-24",
	});
}

export default Component;
