import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4t9qmbum.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4t9qmbum"/>`,
		"fallback": "fa6-solid:file-import",
	});
}

export default Component;
