import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/ripdjiu2y.css';
import '../../css/k/kxpgxsbnl.css';
import '../../css/a/an0us4bhe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ripdjiu2y"/><path class="kxpgxsbnl"/><rect class="an0us4bhe"/></g>`,
		"fallback": "icon-park-solid:bottle-three",
	});
}

export default Component;
