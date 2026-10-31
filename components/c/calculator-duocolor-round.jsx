import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mewpg7bky.css';
import '../../css/i/ii8jztb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mewpg7bky"/><path class="ii8jztb3s"/></g>`,
		"fallback": "coolicons:calculator-duocolor-round",
	});
}

export default Component;
