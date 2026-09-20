import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2vz4ubmz.css';
import '../../css/l/lewkgcwwi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x2vz4ubmz"/><path class="lewkgcwwi"/></g>`,
		"fallback": "streamline-color:archive-box",
	});
}

export default Component;
