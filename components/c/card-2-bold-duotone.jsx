import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipje62d_x.css';
import '../../css/n/n65xcybdr.css';
import '../../css/v/v75m4zb9g.css';
import '../../css/t/tuasagb-m.css';
import '../../css/s/s6qd-zbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipje62d_x"/><path clip-rule="evenodd" class="n65xcybdr"/><path class="v75m4zb9g"/><path class="tuasagb-m"/><path class="s6qd-zbqk"/>`,
		"fallback": "solar:card-2-bold-duotone",
	});
}

export default Component;
