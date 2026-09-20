import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsyatab4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsyatab4h"/>`,
		"fallback": "octicon:graph-stacked-area-24",
	});
}

export default Component;
