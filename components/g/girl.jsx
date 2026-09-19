import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uydmr-psq.css';
import '../../css/a/a2s6o-byq.css';
import '../../css/u/uettqb7vg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="uydmr-psq"/><path class="a2s6o-byq"/><path class="uettqb7vg"/></g>`,
		"fallback": "icon-park-solid:girl",
	});
}

export default Component;
