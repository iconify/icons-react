import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaid2tb2s.css';
import '../../css/b/bgzu24bmj.css';
import '../../css/r/rddc4bbxa.css';
import '../../css/f/fmwyjubnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zaid2tb2s"/><path class="bgzu24bmj"/><path class="rddc4bbxa"/><path class="fmwyjubnm"/></g>`,
		"fallback": "tdesign:discount",
	});
}

export default Component;
