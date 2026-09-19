import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k5pevcbvc.css';
import '../../css/j/jktlcixdp.css';
import '../../css/n/nva12x-3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="k5pevcbvc"/><path class="jktlcixdp"/><path class="nva12x-3a"/></g>`,
		"fallback": "icon-park-outline:dog-zodiac",
	});
}

export default Component;
