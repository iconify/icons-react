import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/a5w4v1b-w.css';
import '../../css/c/cc1c_acsj.css';
import '../../css/i/il3wg5byx.css';
import '../../css/n/nw26jcbsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="a5w4v1b-w"/><path class="cc1c_acsj"/><path class="il3wg5byx"/><path class="nw26jcbsv"/></g>`,
		"fallback": "circle-flags:af",
	});
}

export default Component;
