import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uydmr-psq.css';
import '../../css/c/chx26abuv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="uydmr-psq"/><path class="chx26abuv"/></g>`,
		"fallback": "icon-park-solid:boy-two",
	});
}

export default Component;
