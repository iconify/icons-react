import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8axhkgqy.css';
import '../../css/n/nyzu3ebic.css';
import '../../css/s/s0uwk6b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j8axhkgqy"/><path class="nyzu3ebic"/><path class="s0uwk6b4q"/></g>`,
		"fallback": "struq:folder-open",
	});
}

export default Component;
