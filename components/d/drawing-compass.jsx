import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sm58dfblq.css';
import '../../css/z/z2o0ujiuj.css';
import '../../css/q/qdv9qd58a.css';
import '../../css/d/d330q5myy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sm58dfblq"/><circle class="z2o0ujiuj"/><path class="qdv9qd58a"/><path class="d330q5myy"/></g>`,
		"fallback": "hugeicons:drawing-compass",
	});
}

export default Component;
