import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/e/exw3-ebon.css';
import '../../css/f/fabdtkbxd.css';
import '../../css/q/qacu50y4o.css';
import '../../css/z/zt3o1mbro.css';
import '../../css/f/fbs6o36sv.css';
import '../../css/t/tzoqoynrz.css';
import '../../css/m/ml93c5bic.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="exw3-ebon"/><path class="fabdtkbxd"/><path class="qacu50y4o"/><path class="zt3o1mbro"/><path class="fbs6o36sv"/><path class="tzoqoynrz"/><path class="ml93c5bic"/></g>`,
		"fallback": "icon-park:broadcast-radio",
	});
}

export default Component;
