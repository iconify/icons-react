import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rika0vbol.css';
import '../../css/m/mrc64caws.css';
import '../../css/g/gbvokvbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="matrix(-1 0 0 1 8.08 3.73)" class="rika0vbol"/><path class="mrc64caws"/><circle transform="matrix(-1 0 0 1 8.08 3.73)" class="gbvokvbmc"/></g>`,
		"fallback": "andrsrxn:bounce-start",
	});
}

export default Component;
