import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w300pfpxc.css';
import '../../css/s/siai_tb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w300pfpxc"/><path class="siai_tb_r"/>`,
		"fallback": "solar:graph-down-new-bold",
	});
}

export default Component;
