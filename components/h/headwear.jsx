import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c5-ywabzd.css';
import '../../css/c/czrg8s5vu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c5-ywabzd"/><path class="czrg8s5vu"/></g>`,
		"fallback": "icon-park-outline:headwear",
	});
}

export default Component;
