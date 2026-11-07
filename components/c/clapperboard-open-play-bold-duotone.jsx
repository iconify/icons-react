import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey8w85byk.css';
import '../../css/q/qp-w3sb_i.css';
import '../../css/i/i-xwssvzh.css';
import '../../css/e/evx4dxbpu.css';
import '../../css/q/qf6pz8brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ey8w85byk"/><path class="qp-w3sb_i"/><path class="i-xwssvzh"/><path class="evx4dxbpu"/><path class="qf6pz8brm"/>`,
		"fallback": "solar:clapperboard-open-play-bold-duotone",
	});
}

export default Component;
