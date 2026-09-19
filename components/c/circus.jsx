import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/uetx09b4z.css';
import '../../css/v/vyb-o5bdg.css';
import '../../css/o/op2lmnn5p.css';
import '../../css/e/ewg6ksbdr.css';
import '../../css/h/hdtngbcge.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="uetx09b4z"/><path class="vyb-o5bdg"/><path class="op2lmnn5p"/><path class="ewg6ksbdr"/><path class="hdtngbcge"/></g>`,
		"fallback": "icon-park-solid:circus",
	});
}

export default Component;
