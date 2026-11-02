import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umi_2wm3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umi_2wm3d"/>`,
		"fallback": "mingcute:folder-locked-fill",
	});
}

export default Component;
