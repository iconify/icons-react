import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkjrzmbux.css';
import '../../css/n/nsytfx8go.css';
import '../../css/n/n_eucjbqt.css';
import '../../css/o/oyyc7tb3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vkjrzmbux"/><path clip-rule="evenodd" class="nsytfx8go"/><path class="n_eucjbqt"/><path class="oyyc7tb3f"/></g>`,
		"fallback": "icon-park:car",
	});
}

export default Component;
