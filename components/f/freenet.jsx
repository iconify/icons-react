import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi_v-c7ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi_v-c7ta"/>`,
		"fallback": "thesvg-color:freenet",
	});
}

export default Component;
