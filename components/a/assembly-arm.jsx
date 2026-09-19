import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk1mzua3o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk1mzua3o"/>`,
		"fallback": "file-icons:assembly-arm",
	});
}

export default Component;
