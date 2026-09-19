import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8xlj6v0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8xlj6v0x"/>`,
		"fallback": "fa-regular:comment",
	});
}

export default Component;
