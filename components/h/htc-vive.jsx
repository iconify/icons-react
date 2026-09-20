import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw8sdm1be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw8sdm1be"/>`,
		"fallback": "thesvg-color:htc-vive",
	});
}

export default Component;
