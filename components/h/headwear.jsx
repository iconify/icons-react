import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c5-ywabzd.css';
import '../../css/n/nehgjcg6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c5-ywabzd"/><path class="nehgjcg6r"/></g>`,
		"fallback": "icon-park-solid:headwear",
	});
}

export default Component;
