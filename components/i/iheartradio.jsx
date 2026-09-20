import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z72rv3bie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z72rv3bie"/>`,
		"fallback": "selfhst:iheartradio",
	});
}

export default Component;
