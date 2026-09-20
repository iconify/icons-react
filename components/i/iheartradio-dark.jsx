import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz5y07b3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz5y07b3v"/>`,
		"fallback": "selfhst:iheartradio-dark",
	});
}

export default Component;
