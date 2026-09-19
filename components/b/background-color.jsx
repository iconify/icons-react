import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbzue-nba.css';
import '../../css/e/ejpwfqbsm.css';
import '../../css/a/af9evjbjc.css';
import '../../css/s/s2i_weftl.css';
import '../../css/d/dgk58nbdy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jbzue-nba"/><path class="ejpwfqbsm"/><path class="af9evjbjc"/><path class="s2i_weftl"/><path class="dgk58nbdy"/></g>`,
		"fallback": "icon-park:background-color",
	});
}

export default Component;
