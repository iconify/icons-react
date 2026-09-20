import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llyo8-6yr.css';
import '../../css/q/qy6s686ad.css';
import '../../css/w/w7yy57lcg.css';
import '../../css/e/e56qc54my.css';
import '../../css/e/exxg4mb0x.css';
import '../../css/k/k1lw68a_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="llyo8-6yr"/><path class="qy6s686ad"/><path class="w7yy57lcg"/><circle class="e56qc54my"/><path class="exxg4mb0x"/><path class="k1lw68a_t"/></g>`,
		"fallback": "lucide:git-compare-arrows",
	});
}

export default Component;
