import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsbijbc9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsbijbc9g"/>`,
		"fallback": "cbi:immich",
	});
}

export default Component;
