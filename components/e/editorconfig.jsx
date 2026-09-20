import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tthmh2ddu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tthmh2ddu"/>`,
		"fallback": "thesvg-color:editorconfig",
	});
}

export default Component;
