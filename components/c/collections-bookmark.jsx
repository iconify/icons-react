import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hohb_5b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hohb_5b6n"/>`,
		"fallback": "mdi:collections-bookmark",
	});
}

export default Component;
