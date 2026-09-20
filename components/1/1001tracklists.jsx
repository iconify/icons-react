import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcd4ixenp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcd4ixenp"/>`,
		"fallback": "thesvg-color:1001tracklists",
	});
}

export default Component;
