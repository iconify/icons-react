import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md-zvdmwf.css';
import '../../css/z/z-q4y7gho.css';
import '../../css/f/fn20arazz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md-zvdmwf"/><path class="z-q4y7gho"/><path class="fn20arazz"/>`,
		"fallback": "flag:dz-1x1",
	});
}

export default Component;
