import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz_o64dij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz_o64dij"/>`,
		"fallback": "coolicons:face-sad-round",
	});
}

export default Component;
