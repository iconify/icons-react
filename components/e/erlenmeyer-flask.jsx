import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kemygabdc.css';
import '../../css/n/n8nrz1l5r.css';
import '../../css/p/ptztw3boi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kemygabdc"/><path class="n8nrz1l5r"/><path class="ptztw3boi"/></g>`,
		"fallback": "streamline-plump-color:erlenmeyer-flask",
	});
}

export default Component;
