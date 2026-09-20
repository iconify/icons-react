import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxeigen8q.css';
import '../../css/m/m8v2x6bra.css';
import '../../css/m/mqybf2b7x.css';
import '../../css/d/dn7q6_s2o.css';
import '../../css/t/tbn_iwbah.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxeigen8q"/><path class="m8v2x6bra"/><path class="mqybf2b7x"/><path class="dn7q6_s2o"/><path class="tbn_iwbah"/>`,
		"fallback": "openmoji:american-football",
	});
}

export default Component;
