import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c56atmb2w.css';
import '../../css/a/a8788h5fg.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c56atmb2w"/><path class="a8788h5fg"/></g>`,
		"fallback": "marketeq:desk-6",
	});
}

export default Component;
