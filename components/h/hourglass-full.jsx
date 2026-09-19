import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g52mlw2ar.css';
import '../../css/i/ivtb9ubih.css';
import '../../css/b/b8qt8lbsk.css';
import '../../css/l/lx85cvamk.css';
import '../../css/a/a2xqgdbch.css';
import '../../css/v/vpat_6qhd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="g52mlw2ar"/><path class="ivtb9ubih"/><path class="b8qt8lbsk"/><path class="lx85cvamk"/><path class="a2xqgdbch"/><path class="vpat_6qhd"/></g>`,
		"fallback": "icon-park:hourglass-full",
	});
}

export default Component;
