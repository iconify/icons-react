import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjc1npbxs.css';
import '../../css/s/saj3nzkks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjc1npbxs"/><path class="saj3nzkks"/>`,
		"fallback": "selfhst:frappe-builder",
	});
}

export default Component;
