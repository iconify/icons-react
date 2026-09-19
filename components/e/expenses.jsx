import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dibgq69pv.css';
import '../../css/j/jn7i-l9mm.css';
import '../../css/n/nooy9jbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dibgq69pv"/><path class="jn7i-l9mm"/><path class="nooy9jbyb"/></g>`,
		"fallback": "icon-park-outline:expenses",
	});
}

export default Component;
