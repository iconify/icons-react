import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpma81dsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpma81dsw"/>`,
		"fallback": "bxl:c",
	});
}

export default Component;
