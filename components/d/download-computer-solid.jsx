import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soznv6kqh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="soznv6kqh"/>`,
		"fallback": "streamline:download-computer-solid",
	});
}

export default Component;
