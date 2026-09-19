import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/n/n0_kkrbrg.css';
import '../../css/i/iu_7h2b0u.css';
import '../../css/n/n_o3cqb8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="utf5_xbzs"/><path class="n0_kkrbrg"/><path class="iu_7h2b0u"/><path class="n_o3cqb8g"/></g>`,
		"fallback": "icon-park:align-text-left-one",
	});
}

export default Component;
