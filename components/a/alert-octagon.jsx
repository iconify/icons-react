import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq4gl78ho.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq4gl78ho"/>`,
		"fallback": "zmdi:alert-octagon",
	});
}

export default Component;
