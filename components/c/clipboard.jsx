import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l-xq-1bpb.css';
import '../../css/e/e4n8cdcst.css';
import '../../css/k/k-vg18sac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l-xq-1bpb"/><path class="e4n8cdcst"/><path class="k-vg18sac"/></g>`,
		"fallback": "hugeicons:clipboard",
	});
}

export default Component;
