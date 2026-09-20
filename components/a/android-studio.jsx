import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixskfbb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixskfbb1g"/>`,
		"fallback": "thesvg-color:android-studio",
	});
}

export default Component;
