import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxbvk3b8j.css';
import '../../css/i/i5thibbft.css';
import '../../css/v/vjqdtotvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vxbvk3b8j"/><path class="i5thibbft"/><path class="vjqdtotvw"/></g>`,
		"fallback": "hugeicons:file-axis3d",
	});
}

export default Component;
