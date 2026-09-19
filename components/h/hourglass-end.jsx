import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0h8p0bkt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0h8p0bkt"/>`,
		"fallback": "gravity-ui:hourglass-end",
	});
}

export default Component;
