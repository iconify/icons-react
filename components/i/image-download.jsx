import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uf6sm2mwe.css';
import '../../css/p/pdimccbtd.css';
import '../../css/o/olw7yj8qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uf6sm2mwe"/><path class="pdimccbtd"/><path class="olw7yj8qe"/></g>`,
		"fallback": "hugeicons:image-download",
	});
}

export default Component;
