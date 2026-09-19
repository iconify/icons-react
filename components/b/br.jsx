import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rms4c_byq.css';
import '../../css/t/t_af_oefo.css';
import '../../css/o/o0pvj1w7r.css';
import '../../css/x/xalxho3kx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rms4c_byq"/><path class="t_af_oefo"/><path class="o0pvj1w7r"/><path class="xalxho3kx"/></g>`,
		"fallback": "circle-flags:br",
	});
}

export default Component;
