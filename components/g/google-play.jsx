import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4d04xblq.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4d04xblq"/>`,
		"fallback": "jam:google-play",
	});
}

export default Component;
