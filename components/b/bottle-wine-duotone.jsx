import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwu4h-brz.css';
import '../../css/w/w_n6d5bjy.css';
import '../../css/q/qg2o_4obj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwu4h-brz"/><path class="w_n6d5bjy"/><path class="qg2o_4obj"/></g>`,
		"fallback": "lucide-extended:bottle-wine-duotone",
	});
}

export default Component;
