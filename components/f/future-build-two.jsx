import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/o/ow5qbpbcb.css';
import '../../css/t/tq02k9b6e.css';
import '../../css/f/fdwxxem6p.css';
import '../../css/n/na74nrb5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ow5qbpbcb"/><ellipse class="tq02k9b6e"/><path class="fdwxxem6p"/><path class="na74nrb5b"/></g>`,
		"fallback": "icon-park:future-build-two",
	});
}

export default Component;
