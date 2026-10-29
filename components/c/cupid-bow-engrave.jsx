import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z_7g_hb8w.css';
import '../../css/d/dyj54qb5a.css';
import '../../css/l/lyshkltnl.css';
import '../../css/h/h6_1hfvax.css';
import '../../css/r/rnnsb1bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z_7g_hb8w"/><path class="dyj54qb5a wm-a"/><path class="lyshkltnl wm-shadow"/><path class="h6_1hfvax wm-k"/><path class="rnnsb1bql wm-a"/></g>`,
		"fallback": "withicons:cupid-bow-engrave",
	});
}

export default Component;
