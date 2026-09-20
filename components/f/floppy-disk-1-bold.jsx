import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_ha40bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_ha40bcx"/>`,
		"fallback": "streamline-ultimate:floppy-disk-1-bold",
	});
}

export default Component;
