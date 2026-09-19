import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emos5l7br.css';
import '../../css/d/dn42tbchj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emos5l7br"/><path class="dn42tbchj"/>`,
		"fallback": "boxicons:dock-left-alt",
	});
}

export default Component;
