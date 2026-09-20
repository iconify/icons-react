import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi4a21e2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi4a21e2s"/>`,
		"fallback": "thesvg-color:bungie",
	});
}

export default Component;
