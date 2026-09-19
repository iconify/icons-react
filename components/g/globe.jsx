import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh1abjj4h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mh1abjj4h"/>`,
		"fallback": "heroicons-solid:globe",
	});
}

export default Component;
