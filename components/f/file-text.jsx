import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/n6ejr_bwe.css';
import '../../css/k/ktnz-ubrl.css';
import '../../css/f/fvgwuvbpx.css';
import '../../css/p/pg97xtb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="n6ejr_bwe"/><path class="ktnz-ubrl"/><path class="fvgwuvbpx"/><path class="pg97xtb4f"/></g>`,
		"fallback": "matita:file-text",
	});
}

export default Component;
