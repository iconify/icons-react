import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/w0j83f0iw.css';
import '../../css/m/mh46jehah.css';
import '../../css/t/tabomebrq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="w0j83f0iw"/><path class="mh46jehah"/><path class="tabomebrq"/></g>`,
		"fallback": "icon-park:file-excel",
	});
}

export default Component;
