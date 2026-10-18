import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxfn2sbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxfn2sbdi"/>`,
		"fallback": "vadivam:app-window-mac",
	});
}

export default Component;
