import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7x-xvbro.css';
import '../../css/s/siai_tb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w7x-xvbro"/><path class="siai_tb_r"/>`,
		"fallback": "solar:graph-new-up-bold",
	});
}

export default Component;
