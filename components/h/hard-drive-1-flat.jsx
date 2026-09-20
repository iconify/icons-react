import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jab8ghb_i.css';
import '../../css/a/at-q7cbzd.css';
import '../../css/b/b1g-ddfwb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jab8ghb_i"/><path class="at-q7cbzd"/><path clip-rule="evenodd" class="b1g-ddfwb"/></g>`,
		"fallback": "streamline-color:hard-drive-1-flat",
	});
}

export default Component;
