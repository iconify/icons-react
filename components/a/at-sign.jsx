import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/rllozbc5c.css';
import '../../css/v/vumjnp3nn.css';
import '../../css/k/k2wa0ukpt.css';
import '../../css/p/p76ps17cq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="rllozbc5c"/><path class="vumjnp3nn"/><path class="k2wa0ukpt"/><path class="p76ps17cq"/></g>`,
		"fallback": "icon-park:at-sign",
	});
}

export default Component;
