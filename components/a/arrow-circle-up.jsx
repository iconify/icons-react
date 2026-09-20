import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxi6bp23l.css';
import '../../css/f/fmxdhkgfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxi6bp23l"/><path class="fmxdhkgfp"/>`,
		"fallback": "uim:arrow-circle-up",
	});
}

export default Component;
