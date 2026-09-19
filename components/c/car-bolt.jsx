import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivwl1-arg.css';
import '../../css/u/uj46r2dkm.css';
import '../../css/m/m_u9wub5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivwl1-arg"/><path class="uj46r2dkm"/><path class="m_u9wub5d"/>`,
		"fallback": "boxicons:car-bolt",
	});
}

export default Component;
