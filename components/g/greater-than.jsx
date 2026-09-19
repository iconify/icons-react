import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp035-4hs.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp035-4hs"/>`,
		"fallback": "fa-solid:greater-than",
	});
}

export default Component;
