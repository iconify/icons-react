import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nunux4e-p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nunux4e-p"/>`,
		"fallback": "file-icons:arduino",
	});
}

export default Component;
