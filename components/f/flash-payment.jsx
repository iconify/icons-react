import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/k/kkzhfn1-i.css';
import '../../css/o/o5g359bjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="kkzhfn1-i"/><path class="o5g359bjg"/></g>`,
		"fallback": "icon-park-outline:flash-payment",
	});
}

export default Component;
