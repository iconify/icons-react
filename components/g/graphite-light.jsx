import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjz26jb4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjz26jb4e"/>`,
		"fallback": "selfhst:graphite-light",
	});
}

export default Component;
