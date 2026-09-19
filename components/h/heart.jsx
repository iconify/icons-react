import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scj_g7msv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scj_g7msv"/>`,
		"fallback": "griddy-icons:heart",
	});
}

export default Component;
