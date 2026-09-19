import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/agp8z31zm.css';
import '../../css/g/g1c1xhbvc.css';
import '../../css/z/zcsny6b6r.css';
import '../../css/f/flf2r8myx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="agp8z31zm"/><path class="g1c1xhbvc"/><path class="zcsny6b6r"/><path class="flf2r8myx"/></g>`,
		"fallback": "icon-park:circle-two-line",
	});
}

export default Component;
