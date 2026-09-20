import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iugweob7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iugweob7a"/>`,
		"fallback": "selfhst:codeproject-ai-server-light",
	});
}

export default Component;
