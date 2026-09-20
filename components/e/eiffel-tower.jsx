import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9w7f353f.css';
import '../../css/i/ixkm_fbmv.css';
import '../../css/h/h92zxrpdm.css';
import '../../css/m/mbsw70bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9w7f353f"/><path class="ixkm_fbmv"/><path class="h92zxrpdm"/><path class="mbsw70bxb"/></g>`,
		"fallback": "streamline-cyber-color:eiffel-tower",
	});
}

export default Component;
