import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzp2_-t5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzp2_-t5p"/>`,
		"fallback": "selfhst:foss-events-light",
	});
}

export default Component;
