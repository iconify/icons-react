import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt68ehb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt68ehb4r"/>`,
		"fallback": "coolicons:images-round",
	});
}

export default Component;
