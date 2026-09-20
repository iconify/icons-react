import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqoik2brt.css';
import '../../css/i/ixd5-yack.css';
import '../../css/a/axuwiubai.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqoik2brt"/><path class="ixd5-yack"/><path class="axuwiubai"/></g>`,
		"fallback": "thesvg-color:cap",
	});
}

export default Component;
