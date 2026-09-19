import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p3ch1bbso.css';
import '../../css/c/cys3heb_c.css';
import '../../css/g/gztsvnpfg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="p3ch1bbso"/><path class="cys3heb_c"/><rect class="gztsvnpfg"/></g>`,
		"fallback": "icon-park:bow",
	});
}

export default Component;
