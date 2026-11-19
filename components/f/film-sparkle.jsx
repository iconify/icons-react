import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8pw52b7m.css';
import '../../css/k/ke3v4ccim.css';
import '../../css/z/zi6zftbsn.css';
import '../../css/b/by74kmp-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8pw52b7m"/><path class="ke3v4ccim"/><path class="zi6zftbsn"/><path class="by74kmp-k"/></g>`,
		"fallback": "andrsrxn:film-sparkle",
	});
}

export default Component;
