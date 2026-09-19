import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/l356zpi2t.css';
import '../../css/p/p-ijq8p6w.css';
import '../../css/p/pvs97mopz.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="l356zpi2t"/><circle class="p-ijq8p6w"/><path class="pvs97mopz"/></g>`,
		"fallback": "icon-park-solid:dashboard-one",
	});
}

export default Component;
