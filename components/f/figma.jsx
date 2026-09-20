import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an37nc0so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an37nc0so"/>`,
		"fallback": "pixel:figma",
	});
}

export default Component;
