import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p295tee_h.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p295tee_h"/>`,
		"fallback": "maki:amusement-park-11",
	});
}

export default Component;
