import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-vm_3b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-vm_3b-g"/>`,
		"fallback": "typcn:arrow-shuffle",
	});
}

export default Component;
