import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3wdki6vq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3wdki6vq"/>`,
		"fallback": "streamline:file-remove-alternate",
	});
}

export default Component;
