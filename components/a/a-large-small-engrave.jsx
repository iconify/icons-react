import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z863xlr_b.css';
import '../../css/b/bm2p9rf_l.css';
import '../../css/z/z2_glebig.css';
import '../../css/z/z50c6lbje.css';
import '../../css/p/pkmb6l7kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z863xlr_b"/><path class="bm2p9rf_l wm-a"/><path class="wm-shadow z2_glebig"/><path class="wm-k z50c6lbje"/><path class="pkmb6l7kq wm-a"/></g>`,
		"fallback": "withicons:a-large-small-engrave",
	});
}

export default Component;
