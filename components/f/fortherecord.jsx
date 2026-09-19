import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mznmslb5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mznmslb5e"/>`,
		"fallback": "file-icons:fortherecord",
	});
}

export default Component;
