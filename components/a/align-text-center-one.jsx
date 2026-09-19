import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/c/cahgxccet.css';
import '../../css/i/iu_7h2b0u.css';
import '../../css/j/jtgskbcrm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="cahgxccet"/><path class="iu_7h2b0u"/><path class="jtgskbcrm"/></g>`,
		"fallback": "icon-park:align-text-center-one",
	});
}

export default Component;
