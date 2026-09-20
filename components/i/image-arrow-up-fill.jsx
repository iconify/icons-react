import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x6637lbpk.css';
import '../../css/j/j356xdbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="x6637lbpk"/><path class="j356xdbcz"/></g>`,
		"fallback": "keyline-icons:image-arrow-up-fill",
	});
}

export default Component;
