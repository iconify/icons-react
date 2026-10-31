import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd89ibzna.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd89ibzna"/>`,
		"fallback": "pinhead:eaved-gabled-building",
	});
}

export default Component;
