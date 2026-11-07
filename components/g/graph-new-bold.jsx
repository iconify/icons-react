import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri62nr2ps.css';
import '../../css/s/siai_tb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ri62nr2ps"/><path class="siai_tb_r"/>`,
		"fallback": "solar:graph-new-bold",
	});
}

export default Component;
