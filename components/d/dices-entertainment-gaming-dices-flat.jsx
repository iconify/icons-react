import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9vahr_ms.css';
import '../../css/f/fm1ertpku.css';
import '../../css/w/wo9496hog.css';
import '../../css/k/ks3ogwbug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9vahr_ms"/><path clip-rule="evenodd" class="fm1ertpku"/><path clip-rule="evenodd" class="wo9496hog"/><path class="ks3ogwbug"/></g>`,
		"fallback": "streamline-plump-color:dices-entertainment-gaming-dices-flat",
	});
}

export default Component;
