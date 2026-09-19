import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgpn73_gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgpn73_gs"/>`,
		"fallback": "heroicons-outline:globe-americas",
	});
}

export default Component;
