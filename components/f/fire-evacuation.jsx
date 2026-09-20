import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h5mnqyb0m.css';
import '../../css/f/fr6575kny.css';
import '../../css/b/bn-xpybax.css';
import '../../css/t/tmq-x0b9f.css';
import '../../css/t/tct_c70xf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="h5mnqyb0m"/><path class="fr6575kny"/><path class="bn-xpybax"/><path class="tmq-x0b9f"/><path class="tct_c70xf"/></g>`,
		"fallback": "streamline-plump-color:fire-evacuation",
	});
}

export default Component;
