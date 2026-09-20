import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xllod5uya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xllod5uya"/>`,
		"fallback": "selfhst:cloudbeaver",
	});
}

export default Component;
