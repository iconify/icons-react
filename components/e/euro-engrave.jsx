import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rfy4dcpub.css';
import '../../css/l/lq9vyphje.css';
import '../../css/x/xg81qhpaq.css';
import '../../css/d/duyyrjbez.css';
import '../../css/f/f4uooybgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rfy4dcpub wm-k"/><path class="lq9vyphje wm-a"/><path class="wm-shadow xg81qhpaq"/><path class="duyyrjbez wm-k"/><path class="f4uooybgd wm-a"/></g>`,
		"fallback": "withicons:euro-engrave",
	});
}

export default Component;
