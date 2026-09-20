import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sktatzb8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sktatzb8g"/>`,
		"fallback": "selfhst:dropbox",
	});
}

export default Component;
