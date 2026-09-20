import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9hfk5b6p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9hfk5b6p"/>`,
		"fallback": "streamline:christianity",
	});
}

export default Component;
