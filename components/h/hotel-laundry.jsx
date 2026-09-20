import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vqz7wfbpi.css';
import '../../css/j/j9pmx0bug.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vqz7wfbpi"/><path class="j9pmx0bug"/></g>`,
		"fallback": "streamline:hotel-laundry",
	});
}

export default Component;
