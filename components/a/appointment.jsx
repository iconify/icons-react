import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/gy89sobrg.css';
import '../../css/y/ybvr_gb5s.css';
import '../../css/k/k9nrns9kz.css';
import '../../css/m/mwx4n6bfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="gy89sobrg"/><path class="ybvr_gb5s"/><circle class="k9nrns9kz"/><path class="mwx4n6bfc"/></g>`,
		"fallback": "icon-park-outline:appointment",
	});
}

export default Component;
