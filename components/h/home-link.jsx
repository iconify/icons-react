import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jgnjtlc0k.css';
import '../../css/b/bew41nbzz.css';
import '../../css/w/w7m08bbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jgnjtlc0k"/><path class="bew41nbzz"/><path class="w7m08bbop"/></g>`,
		"fallback": "tabler:home-link",
	});
}

export default Component;
