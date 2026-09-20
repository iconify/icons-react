import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kqvci1mhd.css';
import '../../css/f/flecbyb4c.css';
import '../../css/n/nakdidb8l.css';
import '../../css/q/ql4fqpbas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kqvci1mhd"/><path clip-rule="evenodd" class="flecbyb4c"/><path class="nakdidb8l"/><path clip-rule="evenodd" class="ql4fqpbas"/></g>`,
		"fallback": "streamline-plump-color:card-game-diamond",
	});
}

export default Component;
