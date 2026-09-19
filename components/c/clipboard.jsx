import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sry2f1b9n.css';
import '../../css/g/g8_-9ibpo.css';
import '../../css/u/u7kjvobou.css';
import '../../css/k/kpz46-vtn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sry2f1b9n"/><path class="g8_-9ibpo"/><path class="u7kjvobou"/><path class="kpz46-vtn"/></g>`,
		"fallback": "fluent-emoji-flat:clipboard",
	});
}

export default Component;
