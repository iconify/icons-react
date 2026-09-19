import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2r06ib8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2r06ib8c"/>`,
		"fallback": "cbi:google-home",
	});
}

export default Component;
