import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq1zenb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq1zenb0a"/>`,
		"fallback": "thesvg:brave",
	});
}

export default Component;
