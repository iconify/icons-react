import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dzpqtb_bl.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/p/p9vjoqtlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dzpqtb_bl"/><circle class="xtsrmvj7o"/><circle class="p9vjoqtlo"/></g>`,
		"fallback": "hugeicons:git-compare",
	});
}

export default Component;
