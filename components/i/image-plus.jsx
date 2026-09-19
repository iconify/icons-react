import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvz3gdbus.css';
import '../../css/m/mz1hr1bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvz3gdbus"/><path class="mz1hr1bdi"/>`,
		"fallback": "boxicons:image-plus",
	});
}

export default Component;
