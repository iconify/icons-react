import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/i/iekxguumk.css';
import '../../css/e/e6kad7bsr.css';
import '../../css/p/pp7jd5l6t.css';
import '../../css/w/w5s9in16w.css';
import '../../css/a/ag-gnrc5k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="iekxguumk"/><path class="e6kad7bsr"/><rect class="pp7jd5l6t"/><path class="w5s9in16w"/><path class="ag-gnrc5k"/></g>`,
		"fallback": "icon-park:fire-extinguisher-one",
	});
}

export default Component;
