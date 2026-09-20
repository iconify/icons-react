import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/na05s4bfg.css';
import '../../css/v/vav3g9fdq.css';
import '../../css/o/oxf2xqbqj.css';
import '../../css/a/ab7m81bmz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="na05s4bfg"/><path class="vav3g9fdq"/><path class="oxf2xqbqj"/><path class="ab7m81bmz"/></g>`,
		"fallback": "streamline-plump-color:government-building-1",
	});
}

export default Component;
