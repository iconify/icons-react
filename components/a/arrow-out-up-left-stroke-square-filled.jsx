import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6gvdlb7i.css';
import '../../css/s/soi_5_bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6gvdlb7i"/><path class="soi_5_bkg"/>`,
		"fallback": "boxicons:arrow-out-up-left-stroke-square-filled",
	});
}

export default Component;
