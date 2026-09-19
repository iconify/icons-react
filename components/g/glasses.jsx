import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lfu9081tj.css';
import '../../css/u/ukpkwrb3v.css';
import '../../css/i/il6_1tbws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="lfu9081tj"/><circle class="ukpkwrb3v"/><path class="il6_1tbws"/></g>`,
		"fallback": "icon-park-outline:glasses",
	});
}

export default Component;
