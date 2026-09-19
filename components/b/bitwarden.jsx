import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boh2k7bfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boh2k7bfe"/>`,
		"fallback": "cbi:bitwarden",
	});
}

export default Component;
