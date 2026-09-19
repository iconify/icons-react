import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lcee_744z.css';
import '../../css/e/ezjk6mb0l.css';
import '../../css/o/o8c9i6byv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lcee_744z"/><path class="ezjk6mb0l"/><path class="o8c9i6byv"/></g>`,
		"fallback": "icon-park-outline:database-config",
	});
}

export default Component;
