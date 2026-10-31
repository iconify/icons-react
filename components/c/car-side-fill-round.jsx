import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sih6heblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sih6heblw"/>`,
		"fallback": "coolicons:car-side-fill-round",
	});
}

export default Component;
