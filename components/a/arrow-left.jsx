import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqnh6ybes.css';
import '../../css/t/th1hqrxri.css';
import '../../css/w/wx0602c_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqnh6ybes wm-shadow"/><path class="th1hqrxri wm-k"/><path class="wm-k wx0602c_g"/>`,
		"fallback": "withicons-pastel:arrow-left",
	});
}

export default Component;
