import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzx2bp9nm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzx2bp9nm"/>`,
		"fallback": "selfhst:cerbos-dark",
	});
}

export default Component;
