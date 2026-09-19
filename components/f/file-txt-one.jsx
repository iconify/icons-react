import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/w/w3py_bcea.css';
import '../../css/h/havgn5bgf.css';
import '../../css/c/cfyvl-o0i.css';
import '../../css/c/cwzlrubce.css';
import '../../css/w/wlnu1m5dz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="w3py_bcea"/><path class="havgn5bgf"/><path class="cfyvl-o0i"/><rect class="cwzlrubce"/><path class="wlnu1m5dz"/></g>`,
		"fallback": "icon-park-outline:file-txt-one",
	});
}

export default Component;
