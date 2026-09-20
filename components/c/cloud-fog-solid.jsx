import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fld5_9bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fld5_9bzn"/>`,
		"fallback": "mynaui:cloud-fog-solid",
	});
}

export default Component;
