import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnze186_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnze186_u"/>`,
		"fallback": "nrk:ai-solid",
	});
}

export default Component;
