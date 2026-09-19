import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/u3-ch6bdv.css';
import '../../css/k/k0prkxbkx.css';
import '../../css/w/w8f10i8_e.css';
import '../../css/s/stfab34st.css';
import '../../css/e/e5on5f1qf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="u3-ch6bdv"/><path class="k0prkxbkx"/><path class="w8f10i8_e"/><path class="stfab34st"/><path class="e5on5f1qf"/></g>`,
		"fallback": "icon-park:fingerprint-three",
	});
}

export default Component;
