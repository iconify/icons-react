import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly_5izb1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly_5izb1j"/>`,
		"fallback": "file-icons:config-perl",
	});
}

export default Component;
