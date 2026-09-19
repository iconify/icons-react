import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ioyfii6ga.css';
import '../../css/i/iwbr0cuek.css';
import '../../css/u/u_qlszbyq.css';
import '../../css/p/p577_yzwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ioyfii6ga"/><path class="iwbr0cuek"/><circle class="u_qlszbyq"/><path class="p577_yzwq"/></g>`,
		"fallback": "hugeicons:cake",
	});
}

export default Component;
