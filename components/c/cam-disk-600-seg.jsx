import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsw5o6x4o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsw5o6x4o"/>`,
		"fallback": "ix:cam-disk-600-seg",
	});
}

export default Component;
