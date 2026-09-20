import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dznsu6bwv.css';
import '../../css/k/kzxe_sb3s.css';
import '../../css/t/t1rt3wbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dznsu6bwv"/><path class="kzxe_sb3s"/><path class="t1rt3wbvq"/></g>`,
		"fallback": "streamline-ultimate-color:brightness",
	});
}

export default Component;
