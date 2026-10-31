import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/epokgjbrc.css';
import '../../css/r/rtg5wwmrv.css';
import '../../css/n/nvj7pabfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="epokgjbrc wm-shadow"/><path class="rtg5wwmrv wm-shadow"/><path class="nvj7pabfb"/></g>`,
		"fallback": "withicons-brutal:fence",
	});
}

export default Component;
