import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gypgt4b0a.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gypgt4b0a"/>`,
		"fallback": "ps:book",
	});
}

export default Component;
