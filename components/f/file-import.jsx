import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da6e7c_me.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da6e7c_me"/>`,
		"fallback": "fa-solid:file-import",
	});
}

export default Component;
