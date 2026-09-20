import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_kltstqp.css';
import '../../css/s/smm_-b_wm.css';
import '../../css/d/dzs_rab9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_kltstqp"/><path class="smm_-b_wm"/><path class="dzs_rab9x"/>`,
		"fallback": "stash:desktop-duotone",
	});
}

export default Component;
