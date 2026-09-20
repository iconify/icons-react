import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhg80cclb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhg80cclb"/>`,
		"fallback": "selfhst:disney-plus-dark",
	});
}

export default Component;
