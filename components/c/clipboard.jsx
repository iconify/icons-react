import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1hce7bpd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1hce7bpd"/>`,
		"fallback": "icons8:clipboard",
	});
}

export default Component;
