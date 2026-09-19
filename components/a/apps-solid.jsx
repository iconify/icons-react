import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kopogg_hi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kopogg_hi"/>`,
		"fallback": "basil:apps-solid",
	});
}

export default Component;
