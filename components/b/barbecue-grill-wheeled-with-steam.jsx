import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfdrazgdk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfdrazgdk"/>`,
		"fallback": "pinhead:barbecue-grill-wheeled-with-steam",
	});
}

export default Component;
