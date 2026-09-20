import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiwv975yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiwv975yv"/>`,
		"fallback": "uil:compress-arrows",
	});
}

export default Component;
