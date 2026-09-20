import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb40d305w.css';
import '../../css/y/y850ku1de.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb40d305w"/><path class="y850ku1de"/>`,
		"fallback": "lineicons:gallery",
	});
}

export default Component;
