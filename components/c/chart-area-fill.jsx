import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9fwjzi_d.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9fwjzi_d"/>`,
		"fallback": "pullo:chart-area-fill",
	});
}

export default Component;
