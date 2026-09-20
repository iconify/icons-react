import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l2alo95cn.css';
import '../../css/h/hkturdord.css';
import '../../css/s/s5hukc19o.css';
import '../../css/w/wezoqwbhz.css';
import '../../css/x/xnplrbc4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l2alo95cn"/><rect class="hkturdord"/><path class="s5hukc19o"/><rect class="wezoqwbhz"/><path class="xnplrbc4v"/></g>`,
		"fallback": "lucide-lab:glasses-square",
	});
}

export default Component;
