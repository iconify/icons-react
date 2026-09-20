import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cru_k3cfg.css';
import '../../css/v/vfp2hcb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="cru_k3cfg"/><path class="vfp2hcb6n"/></g>`,
		"fallback": "streamline-cyber:car-4",
	});
}

export default Component;
