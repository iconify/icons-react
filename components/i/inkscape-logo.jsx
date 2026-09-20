import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/i/iycdh97rj.css';
import '../../css/u/u81geabum.css';
import '../../css/h/hdlnvh8vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="iycdh97rj"/><path class="u81geabum"/><path class="hdlnvh8vq"/></g>`,
		"fallback": "streamline-logos:inkscape-logo",
	});
}

export default Component;
