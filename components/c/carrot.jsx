import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/di-pxlb5e.css';
import '../../css/v/v25hqabft.css';
import '../../css/w/wfk4993lu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="di-pxlb5e"/><path class="v25hqabft"/><path class="wfk4993lu"/></g>`,
		"fallback": "fluent-emoji-flat:carrot",
	});
}

export default Component;
