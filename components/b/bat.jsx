import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wu9mq3b0k.css';
import '../../css/n/n13cb2-sh.css';
import '../../css/z/z21ubabnt.css';
import '../../css/m/m2k88mvim.css';
import '../../css/j/jsamf_0kd.css';
import '../../css/g/ge6pl5b7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wu9mq3b0k"/><path class="n13cb2-sh"/><path class="z21ubabnt"/><path class="m2k88mvim"/><path class="jsamf_0kd"/><path class="ge6pl5b7t wm-deco"/></g>`,
		"fallback": "withicons-sticker:bat",
	});
}

export default Component;
