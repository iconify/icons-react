import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqv0ml9jc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqv0ml9jc"/>`,
		"fallback": "file-icons:gradle",
	});
}

export default Component;
