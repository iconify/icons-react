import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wef_rfbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wef_rfbrt"/>`,
		"fallback": "vadivam:file-braces-corner",
	});
}

export default Component;
