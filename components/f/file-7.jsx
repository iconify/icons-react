import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc0uk0c4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc0uk0c4j"/>`,
		"fallback": "subway:file-7",
	});
}

export default Component;
