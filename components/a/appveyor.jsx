import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shr4fu72y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="shr4fu72y"/>`,
		"fallback": "file-icons:appveyor",
	});
}

export default Component;
