import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oiy2qljci.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/e/ekeyfud6d.css';
import '../../css/g/gkdghs3sr.css';
import '../../css/h/h4x2644fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="oiy2qljci wm-deco"/><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="ekeyfud6d wm-k"/><path class="gkdghs3sr wm-a"/><path class="h4x2644fl wm-k"/></g>`,
		"fallback": "withicons:heart-handshake-blueprint",
	});
}

export default Component;
