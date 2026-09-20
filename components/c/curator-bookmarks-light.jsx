import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgkp2kb1x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgkp2kb1x"/>`,
		"fallback": "selfhst:curator-bookmarks-light",
	});
}

export default Component;
