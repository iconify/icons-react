import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyxa7wbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyxa7wbhu"/>`,
		"fallback": "keyline-icons:clock-9-sharp",
	});
}

export default Component;
