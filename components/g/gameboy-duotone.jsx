import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jdnf89uqo.css';
import '../../css/j/jriqb040a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jdnf89uqo"/><path class="jriqb040a"/></g>`,
		"fallback": "reicon:gameboy-duotone",
	});
}

export default Component;
