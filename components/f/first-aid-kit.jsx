import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/i4uadmb9d.css';
import '../../css/g/gg74-wb0r.css';
import '../../css/i/ixrulac1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="i4uadmb9d"/><path class="gg74-wb0r"/><path class="ixrulac1n"/></g>`,
		"fallback": "icon-park-solid:first-aid-kit",
	});
}

export default Component;
