import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5i-rfb6g.css';
import '../../css/p/pcvcreaar.css';
import '../../css/c/cotzlwrvw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5i-rfb6g"/><path class="pcvcreaar"/><path class="cotzlwrvw"/>`,
		"fallback": "energy-icons:connector-ccs-20-bold",
	});
}

export default Component;
