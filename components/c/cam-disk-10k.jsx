import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3qjh-7lx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3qjh-7lx"/>`,
		"fallback": "ix:cam-disk-10k",
	});
}

export default Component;
