import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfk3trb7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfk3trb7c"/>`,
		"fallback": "file-icons:bem",
	});
}

export default Component;
