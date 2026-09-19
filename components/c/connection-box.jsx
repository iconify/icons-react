import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/gwp2jwycy.css';
import '../../css/p/pas470bde.css';
import '../../css/d/dt-wanbxy.css';
import '../../css/a/ay-mwcklb.css';
import '../../css/o/o_ea411kg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="gwp2jwycy"/><path class="pas470bde"/><path class="dt-wanbxy"/><path class="ay-mwcklb"/><path class="o_ea411kg"/></g>`,
		"fallback": "icon-park:connection-box",
	});
}

export default Component;
