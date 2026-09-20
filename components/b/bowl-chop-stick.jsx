import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pe2ei-ydm.css';
import '../../css/f/farn-i4io.css';
import '../../css/l/lbhjmokmv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="pe2ei-ydm"/><path class="farn-i4io"/><path clip-rule="evenodd" class="lbhjmokmv"/></g>`,
		"fallback": "streamline-plump:bowl-chop-stick",
	});
}

export default Component;
