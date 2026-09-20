import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeiv6oacw.css';
import '../../css/c/c2jt5db4x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeiv6oacw"/><path class="c2jt5db4x"/>`,
		"fallback": "selfhst:cloudron",
	});
}

export default Component;
