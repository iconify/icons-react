import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa6pgeb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pa6pgeb4t"/>`,
		"fallback": "reicon:heart-pulse2",
	});
}

export default Component;
