import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byze8w0xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byze8w0xj"/>`,
		"fallback": "thesvg-color:google-admob",
	});
}

export default Component;
