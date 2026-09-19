import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw-oc8bqw.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw-oc8bqw"/>`,
		"fallback": "whh:checkinalt",
	});
}

export default Component;
