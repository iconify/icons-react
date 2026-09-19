import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7h7y4b-a.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7h7y4b-a"/>`,
		"fallback": "zmdi:camera-add",
	});
}

export default Component;
