import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eooclpefv.css';
import '../../css/l/l_ge0bc2p.css';
import '../../css/s/svsjp97bp.css';
import '../../css/b/bym404azn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eooclpefv"/><path class="l_ge0bc2p"/><path class="svsjp97bp"/><path class="bym404azn"/>`,
		"fallback": "solar:battery-half-bold-duotone",
	});
}

export default Component;
