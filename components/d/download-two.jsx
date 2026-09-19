import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p9zkvvbfg.css';
import '../../css/v/vk-mer1ow.css';
import '../../css/z/ztkfpwi5j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="p9zkvvbfg"/><path class="vk-mer1ow"/><path class="ztkfpwi5j"/></g>`,
		"fallback": "icon-park:download-two",
	});
}

export default Component;
