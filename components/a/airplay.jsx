import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/hox00fw-n.css';
import '../../css/v/vb569dqcb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="hox00fw-n"/><path class="vb569dqcb"/></g>`,
		"fallback": "icon-park:airplay",
	});
}

export default Component;
