import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wdlsi5blf.css';
import '../../css/l/lj4c_yoqf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="wdlsi5blf"/><path class="lj4c_yoqf"/></g>`,
		"fallback": "icon-park:chart-proportion",
	});
}

export default Component;
