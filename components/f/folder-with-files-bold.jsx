import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz2ub5bko.css';
import '../../css/h/hazygbbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vz2ub5bko"/><path class="hazygbbpv"/>`,
		"fallback": "solar:folder-with-files-bold",
	});
}

export default Component;
