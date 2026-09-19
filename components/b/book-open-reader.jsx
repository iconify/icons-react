import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm-n87bpg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm-n87bpg"/>`,
		"fallback": "fa6-solid:book-open-reader",
	});
}

export default Component;
