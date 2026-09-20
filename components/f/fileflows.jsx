import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be4hxabip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be4hxabip"/>`,
		"fallback": "selfhst:fileflows",
	});
}

export default Component;
