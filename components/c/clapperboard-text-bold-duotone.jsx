import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od2g0acza.css';
import '../../css/c/cxbhrab6z.css';
import '../../css/c/ch0lkibmx.css';
import '../../css/k/k5s_6-4ei.css';
import '../../css/d/dw6-rudva.css';
import '../../css/v/vz_jdh1qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od2g0acza"/><path class="cxbhrab6z"/><path class="ch0lkibmx"/><path class="k5s_6-4ei"/><path class="dw6-rudva"/><path class="vz_jdh1qe"/>`,
		"fallback": "solar:clapperboard-text-bold-duotone",
	});
}

export default Component;
