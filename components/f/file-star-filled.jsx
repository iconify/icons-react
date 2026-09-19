import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdv2q9x8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdv2q9x8x"/>`,
		"fallback": "boxicons:file-star-filled",
	});
}

export default Component;
