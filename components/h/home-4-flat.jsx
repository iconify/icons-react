import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snm97r-0o.css';
import '../../css/x/xjs59m2vp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="snm97r-0o"/><path clip-rule="evenodd" class="xjs59m2vp"/></g>`,
		"fallback": "streamline-color:home-4-flat",
	});
}

export default Component;
