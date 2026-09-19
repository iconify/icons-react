import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/k/kshvrmxkq.css';
import '../../css/v/v121jkdcl.css';
import '../../css/t/tm8du2wue.css';
import '../../css/k/kbaxmbcxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="kshvrmxkq"/><path class="v121jkdcl"/><path class="tm8du2wue"/><path class="kbaxmbcxl"/></g>`,
		"fallback": "icon-park:add-print",
	});
}

export default Component;
