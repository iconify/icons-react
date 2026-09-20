import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1dm3kwtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1dm3kwtr"/>`,
		"fallback": "prime:align-center",
	});
}

export default Component;
