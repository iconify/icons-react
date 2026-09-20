import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldsq-nn6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldsq-nn6r"/>`,
		"fallback": "ix:disk-filled",
	});
}

export default Component;
