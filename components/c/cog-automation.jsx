import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/atf3sjb9z.css';
import '../../css/c/cxb-a4b0a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="atf3sjb9z"/><path class="cxb-a4b0a"/></g>`,
		"fallback": "streamline-plump:cog-automation",
	});
}

export default Component;
