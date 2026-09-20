import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgh8dkykn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgh8dkykn"/>`,
		"fallback": "tabler:cloud-bolt",
	});
}

export default Component;
