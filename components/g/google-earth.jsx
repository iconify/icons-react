import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3kclgbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3kclgbne"/>`,
		"fallback": "thesvg-color:google-earth",
	});
}

export default Component;
