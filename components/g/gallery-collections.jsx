import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/o9z9o3dpe.css';
import '../../css/j/jbnjxnlrb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="o9z9o3dpe"/><path class="jbnjxnlrb"/></g>`,
		"fallback": "marketeq:gallery-collections",
	});
}

export default Component;
