import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pi85rhb3t.css';
import '../../css/t/t8srh3bsq.css';
import '../../css/b/btc70ibsp.css';
import '../../css/h/hu0hzbbeq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pi85rhb3t"/><path class="t8srh3bsq"/><path class="btc70ibsp"/><path class="hu0hzbbeq"/></g>`,
		"fallback": "icon-park-solid:api",
	});
}

export default Component;
