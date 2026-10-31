import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3jb7-bgm.css';
import '../../css/g/go7_m2bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n3jb7-bgm"/><path class="go7_m2bux"/></g>`,
		"fallback": "coolicons:align-top-duocolor-round",
	});
}

export default Component;
