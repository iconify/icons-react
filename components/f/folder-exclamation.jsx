import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka5_0n05d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka5_0n05d"/>`,
		"fallback": "uil:folder-exclamation",
	});
}

export default Component;
