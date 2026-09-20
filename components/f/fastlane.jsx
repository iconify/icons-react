import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egtzl_b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egtzl_b-r"/>`,
		"fallback": "thesvg-color:fastlane",
	});
}

export default Component;
