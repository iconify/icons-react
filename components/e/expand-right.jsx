import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/l/l-gdtgbaj.css';
import '../../css/j/j1iya_bct.css';
import '../../css/l/ltz8c0bzf.css';
import '../../css/i/ienynzehy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="l-gdtgbaj"/><path class="j1iya_bct"/><path class="ltz8c0bzf"/><path class="ienynzehy"/></g>`,
		"fallback": "icon-park:expand-right",
	});
}

export default Component;
