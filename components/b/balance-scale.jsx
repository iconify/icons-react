import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvw2c1gyq.css';
import '../../css/v/vkv4itg_l.css';
import '../../css/w/wb4p8zbdh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvw2c1gyq"/><path class="vkv4itg_l"/><path class="wb4p8zbdh"/></g>`,
		"fallback": "fluent-emoji-flat:balance-scale",
	});
}

export default Component;
