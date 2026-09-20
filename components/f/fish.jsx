import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/i/ivapdzbmk.css';
import '../../css/w/wb367bb3b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="ivapdzbmk"/><path class="wb367bb3b"/></g>`,
		"fallback": "streamline-plump:fish",
	});
}

export default Component;
