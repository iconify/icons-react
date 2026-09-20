import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdepvubof.css';
import '../../css/a/aynajtbdx.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdepvubof"/><path class="aynajtbdx"/>`,
		"fallback": "maki:car-rental-11",
	});
}

export default Component;
