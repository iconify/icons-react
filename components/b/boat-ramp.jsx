import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5qcd1b-i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5qcd1b-i"/>`,
		"fallback": "temaki:boat-ramp",
	});
}

export default Component;
