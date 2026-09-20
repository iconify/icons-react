import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwr-4osjt.css';
import '../../css/i/ikb-nb4ol.css';
import '../../css/o/osug8046v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iwr-4osjt"/><path class="ikb-nb4ol"/><path class="osug8046v"/></g>`,
		"fallback": "streamline-flex-color:file-code-1",
	});
}

export default Component;
