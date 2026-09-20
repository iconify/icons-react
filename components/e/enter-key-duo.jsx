import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/l/l52wioblq.css';
import '../../css/q/qxj1occ1r.css';
import '../../css/l/llc4772za.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="l52wioblq"/><path class="qxj1occ1r"/><path class="llc4772za"/></g>`,
		"fallback": "streamline-kameleon-color:enter-key-duo",
	});
}

export default Component;
