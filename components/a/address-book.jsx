import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vdpoyrbwh.css';
import '../../css/t/t98__9s6v.css';
import '../../css/i/iru-mbbdf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="vdpoyrbwh"/><circle class="t98__9s6v"/><path class="iru-mbbdf"/></g>`,
		"fallback": "icon-park-solid:address-book",
	});
}

export default Component;
