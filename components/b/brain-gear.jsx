import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4pdn--np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4pdn--np"/>`,
		"fallback": "noviair-light:brain-gear",
	});
}

export default Component;
