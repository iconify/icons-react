import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/u/uqbu0ghtz.css';
import '../../css/w/wuqdyi28t.css';
import '../../css/u/uptm_lbtv.css';
import '../../css/v/vc4imw9xx.css';
import '../../css/l/lsjkoxbpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="uqbu0ghtz"/><path class="wuqdyi28t"/><path class="uptm_lbtv"/><path class="vc4imw9xx"/><path class="lsjkoxbpf"/></g>`,
		"fallback": "icon-park:adobe-illustrate",
	});
}

export default Component;
