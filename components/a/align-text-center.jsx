import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh59gvbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh59gvbbk"/>`,
		"fallback": "streamline-sharp:align-text-center",
	});
}

export default Component;
