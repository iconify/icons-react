import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lb-lfcbse.css';
import '../../css/h/hzvbg3bbn.css';
import '../../css/u/ul3ge0b9c.css';
import '../../css/h/hc3wxtbfo.css';
import '../../css/c/cywyir7_w.css';
import '../../css/x/xc48zglrv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsAfar0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsAfar0)"><path class="lb-lfcbse"/><path class="hzvbg3bbn"/><path class="ul3ge0b9c"/><path class="hc3wxtbfo"/><path class="cywyir7_w"/><path class="xc48zglrv"/></g>`,
		"fallback": "circle-flags:afar",
	});
}

export default Component;
