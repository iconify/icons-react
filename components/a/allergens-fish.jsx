import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ah89bsx3m.css';
import '../../css/n/ngfkzc87p.css';
import '../../css/b/bwhhw35tf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ah89bsx3m"/><path class="ngfkzc87p"/><path class="bwhhw35tf"/></g>`,
		"fallback": "streamline-flex-color:allergens-fish",
	});
}

export default Component;
