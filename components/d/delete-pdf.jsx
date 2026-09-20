import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k5y6twb8d.css';
import '../../css/s/sx3lstbif.css';
import '../../css/g/gpatv5buq.css';
import '../../css/b/brrj_bzyh.css';
import '../../css/v/vuktjebwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k5y6twb8d"/><path class="sx3lstbif"/><path class="gpatv5buq"/><path class="brrj_bzyh"/><path class="vuktjebwx"/></g>`,
		"fallback": "streamline-sharp-color:delete-pdf",
	});
}

export default Component;
