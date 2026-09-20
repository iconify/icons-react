import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayp9c8duo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayp9c8duo"/>`,
		"fallback": "selfhst:emby-dark",
	});
}

export default Component;
