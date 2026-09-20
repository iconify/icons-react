import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sciqm6oqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sciqm6oqm"/>`,
		"fallback": "ri:google-line",
	});
}

export default Component;
