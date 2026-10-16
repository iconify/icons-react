import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4l8cxbpg.css';
import '../../css/k/kvj1fs-np.css';
import '../../css/d/dw7wi78ff.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4l8cxbpg"/><path class="kvj1fs-np"/><path class="dw7wi78ff"/>`,
		"fallback": "energy-icons:gift-card-20",
	});
}

export default Component;
