import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v17_2acth.css';
import '../../css/f/ffoe0dmwm.css';
import '../../css/u/uxajn92bi.css';
import '../../css/i/i6sxqebxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v17_2acth"/><path class="ffoe0dmwm"/><path class="uxajn92bi"/><path class="i6sxqebxi"/></g>`,
		"fallback": "icon-park-outline:composition",
	});
}

export default Component;
