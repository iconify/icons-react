import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dlbic1bgo.css';
import '../../css/z/zt8glxhsg.css';
import '../../css/l/lpo9v9cnc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcwdLOerW"><g class="v3_i3wktz"><path class="dlbic1bgo"/><path clip-rule="evenodd" class="zt8glxhsg"/><path class="lpo9v9cnc"/></g></mask></defs><path mask="url(#SVGcwdLOerW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:calendar-thirty-two",
	});
}

export default Component;
