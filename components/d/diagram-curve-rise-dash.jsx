import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi17iyctf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi17iyctf"/>`,
		"fallback": "streamline-ultimate-color:diagram-curve-rise-dash",
	});
}

export default Component;
