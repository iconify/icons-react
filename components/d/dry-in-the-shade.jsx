import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btuo36bhm.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btuo36bhm"/>`,
		"fallback": "ps:dry-in-the-shade",
	});
}

export default Component;
