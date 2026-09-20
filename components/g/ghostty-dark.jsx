import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw6-7kbnp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw6-7kbnp"/>`,
		"fallback": "selfhst:ghostty-dark",
	});
}

export default Component;
