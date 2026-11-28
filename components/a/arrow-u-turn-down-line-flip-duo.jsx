import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if52qlb1x.css';
import '../../css/e/etlfyzbfo.css';
import '../../css/u/u4ajc5b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="if52qlb1x"/><path class="etlfyzbfo"/><path class="u4ajc5b3s"/></g>`,
		"fallback": "iconaut:arrow-u-turn-down-line-flip-duo",
	});
}

export default Component;
