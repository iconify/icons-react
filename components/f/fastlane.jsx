import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9pwg9s4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9pwg9s4k"/>`,
		"fallback": "simple-icons:fastlane",
	});
}

export default Component;
