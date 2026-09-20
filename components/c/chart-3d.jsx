import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mc_oqmjby.css';
import '../../css/l/lf81ipdak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mc_oqmjby"/><path class="lf81ipdak"/></g>`,
		"fallback": "tdesign:chart-3d",
	});
}

export default Component;
