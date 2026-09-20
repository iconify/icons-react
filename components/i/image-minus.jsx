import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kzmnvikyr.css';
import '../../css/k/kaaj88bma.css';
import '../../css/k/kiwzkfnae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kzmnvikyr"/><path clip-rule="evenodd" class="kaaj88bma"/><path class="kiwzkfnae"/></g>`,
		"fallback": "reicon:image-minus",
	});
}

export default Component;
