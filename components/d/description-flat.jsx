import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfhlp2ing.css';
import '../../css/z/z9nqogb2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pfhlp2ing"/><path clip-rule="evenodd" class="z9nqogb2e"/></g>`,
		"fallback": "streamline-plump-color:description-flat",
	});
}

export default Component;
