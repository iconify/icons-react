import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agaqwoz2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agaqwoz2x"/>`,
		"fallback": "uil:document-layout-center",
	});
}

export default Component;
