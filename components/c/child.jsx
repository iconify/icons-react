import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drp3_i9rj.css';

const viewBox = {"width":1152,"height":1632};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drp3_i9rj"/>`,
		"fallback": "fa:child",
	});
}

export default Component;
