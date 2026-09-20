import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t59excn8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t59excn8d"/>`,
		"fallback": "lineicons:floppy-disk-1",
	});
}

export default Component;
