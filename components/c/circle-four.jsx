import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/q/qecs0wskw.css';
import '../../css/d/dzlzt3bvm.css';
import '../../css/x/xr90nj5ns.css';
import '../../css/k/knwmkzcwg.css';
import '../../css/j/jp5pkd-gs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path clip-rule="evenodd" class="qecs0wskw"/><path clip-rule="evenodd" class="dzlzt3bvm"/><path clip-rule="evenodd" class="xr90nj5ns"/><path clip-rule="evenodd" class="knwmkzcwg"/><path class="jp5pkd-gs"/></g>`,
		"fallback": "icon-park:circle-four",
	});
}

export default Component;
