import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz2p8ccat.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz2p8ccat"/>`,
		"fallback": "fa7-solid:asterisk",
	});
}

export default Component;
