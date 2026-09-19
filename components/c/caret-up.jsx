import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc-b-cbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc-b-cbkm"/>`,
		"fallback": "ci:caret-up",
	});
}

export default Component;
