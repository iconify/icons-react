import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waf5nr0aw.css';
import '../../css/f/flc22bblw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waf5nr0aw"/><path class="flc22bblw"/>`,
		"fallback": "selfhst:filesync",
	});
}

export default Component;
