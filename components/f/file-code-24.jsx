import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy6j6obsd.css';
import '../../css/e/e7yp3qfxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy6j6obsd"/><path class="e7yp3qfxf"/>`,
		"fallback": "octicon:file-code-24",
	});
}

export default Component;
