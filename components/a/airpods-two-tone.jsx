import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ibcz29bif.css';
import '../../css/j/jp0olbbyo.css';
import '../../css/r/rj2y4vkzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ibcz29bif"/><path class="jp0olbbyo"/><path class="rj2y4vkzd"/></g>`,
		"fallback": "keyline-icons:airpods-two-tone",
	});
}

export default Component;
