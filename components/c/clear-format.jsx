import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/gsx1bnbse.css';
import '../../css/s/sul83f9ve.css';
import '../../css/o/obbrti2nr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="gsx1bnbse"/><path class="sul83f9ve"/><path class="obbrti2nr"/></g>`,
		"fallback": "icon-park-solid:clear-format",
	});
}

export default Component;
