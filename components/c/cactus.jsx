import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/sev2ulxrd.css';
import '../../css/b/btzqzab2f.css';
import '../../css/q/qnx5uabzy.css';
import '../../css/y/yjz-s-8va.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="sev2ulxrd"/><path class="btzqzab2f"/><path class="qnx5uabzy"/><path class="yjz-s-8va"/></g>`,
		"fallback": "icon-park:cactus",
	});
}

export default Component;
