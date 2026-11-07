import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgns90b-d.css';
import '../../css/e/ekudvch8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgns90b-d"/><path class="ekudvch8j"/>`,
		"fallback": "solar:exclamation-mark-bold",
	});
}

export default Component;
