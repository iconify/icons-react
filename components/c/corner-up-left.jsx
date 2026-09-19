import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kn1cqwdub.css';
import '../../css/n/n4q6r3b3j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="kn1cqwdub"/><path class="n4q6r3b3j"/></g>`,
		"fallback": "icon-park-outline:corner-up-left",
	});
}

export default Component;
