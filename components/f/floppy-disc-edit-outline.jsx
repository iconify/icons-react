import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs8t_dbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs8t_dbid"/>`,
		"fallback": "mdi:floppy-disc-edit-outline",
	});
}

export default Component;
