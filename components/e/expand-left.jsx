import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aze3fnbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aze3fnbve"/>`,
		"fallback": "uil:expand-left",
	});
}

export default Component;
