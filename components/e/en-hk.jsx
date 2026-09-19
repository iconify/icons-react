import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/gp966mffb.css';
import '../../css/h/hrwcijwrl.css';
import '../../css/e/eo114u_wk.css';
import '../../css/e/eec2tedcw.css';
import '../../css/y/yvjv1pirb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="gp966mffb"/><path class="hrwcijwrl"/><path class="eo114u_wk"/><path class="eec2tedcw"/><path class="yvjv1pirb"/></g>`,
		"fallback": "circle-flags:en-hk",
	});
}

export default Component;
