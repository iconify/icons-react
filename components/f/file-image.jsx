import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhix2wr0x.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhix2wr0x"/>`,
		"fallback": "fa-solid:file-image",
	});
}

export default Component;
