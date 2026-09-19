import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd_3bbbwk.css';
import '../../css/w/w5hpaebnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd_3bbbwk"/><path class="w5hpaebnz"/>`,
		"fallback": "gcp:cloud-routes",
	});
}

export default Component;
