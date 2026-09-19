import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qsfhwff4p.css';
import '../../css/z/zfc090b3x.css';
import '../../css/m/mg-hozavo.css';
import '../../css/p/p3h2roxlo.css';
import '../../css/s/s0ummfbpm.css';
import '../../css/u/u9mbv386n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="qsfhwff4p"/><path class="zfc090b3x"/><path class="mg-hozavo"/><path class="p3h2roxlo"/><path class="s0ummfbpm"/><path class="u9mbv386n"/></g>`,
		"fallback": "icon-park:consume",
	});
}

export default Component;
