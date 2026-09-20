import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff99hubzr.css';
import '../../css/o/omxh1nh0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff99hubzr"/><path class="omxh1nh0o"/>`,
		"fallback": "streamline-ultimate:design-tool-compass-bold",
	});
}

export default Component;
