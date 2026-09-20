import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rte_5ulhq.css';
import '../../css/u/ue1znegmj.css';
import '../../css/h/hm0xfacvg.css';
import '../../css/i/in7fxsblf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rte_5ulhq"/><path class="ue1znegmj"/><path class="hm0xfacvg"/><path class="in7fxsblf"/></g>`,
		"fallback": "streamline-color:cyborg-2",
	});
}

export default Component;
