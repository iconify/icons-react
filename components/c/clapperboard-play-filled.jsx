import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vdv-xgevj.css';
import '../../css/b/bg6xscbrb.css';
import '../../css/r/rvakh8bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vdv-xgevj"/><path clip-rule="evenodd" class="bg6xscbrb"/><path class="rvakh8bko"/></g>`,
		"fallback": "reicon:clapperboard-play-filled",
	});
}

export default Component;
