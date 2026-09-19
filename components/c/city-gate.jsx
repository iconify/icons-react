import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d9lreu_xt.css';
import '../../css/l/lm9e4db0f.css';
import '../../css/l/lazl2-mwt.css';
import '../../css/d/d-m6ebcne.css';
import '../../css/p/pw2bzpbnn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="d9lreu_xt"/><path class="lm9e4db0f"/><path class="lazl2-mwt"/><path class="d-m6ebcne"/><path class="pw2bzpbnn"/></g>`,
		"fallback": "icon-park-solid:city-gate",
	});
}

export default Component;
