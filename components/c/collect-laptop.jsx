import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/usswkqb0n.css';
import '../../css/m/mp3b3lb8i.css';
import '../../css/i/if50gqbcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="usswkqb0n"/><path class="mp3b3lb8i"/><path class="if50gqbcw"/></g>`,
		"fallback": "icon-park-outline:collect-laptop",
	});
}

export default Component;
