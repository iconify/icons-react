import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wz8yvusof.css';
import '../../css/p/pkd1eol3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="wz8yvusof"/><path class="pkd1eol3g"/></g>`,
		"fallback": "icon-park:chart-ring",
	});
}

export default Component;
