import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n56u5w1us.css';
import '../../css/c/cwy5dxbgm.css';
import '../../css/k/kmuwojfof.css';
import '../../css/t/tli3q6bmx.css';
import '../../css/n/n6t65ilhd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n56u5w1us"/><path class="cwy5dxbgm"/><path class="kmuwojfof"/><path class="tli3q6bmx"/><path class="n6t65ilhd"/>`,
		"fallback": "energy-icons:control-room-20",
	});
}

export default Component;
