import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksz2pjk8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksz2pjk8c"/>`,
		"fallback": "file-icons:inform7",
	});
}

export default Component;
