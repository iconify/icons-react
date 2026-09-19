import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vobn2vo6z.css';

const viewBox = {"width":304,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vobn2vo6z"/>`,
		"fallback": "zmdi:android-alt",
	});
}

export default Component;
