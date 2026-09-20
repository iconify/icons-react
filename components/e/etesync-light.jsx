import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x98thzm6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x98thzm6w"/>`,
		"fallback": "selfhst:etesync-light",
	});
}

export default Component;
