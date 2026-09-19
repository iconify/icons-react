import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/yziyf7bub.css';
import '../../css/o/oeh3u8vmc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="yziyf7bub"/><path class="oeh3u8vmc"/></g>`,
		"fallback": "icon-park:full-screen-play",
	});
}

export default Component;
