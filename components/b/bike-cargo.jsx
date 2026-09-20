import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcf40ms0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcf40ms0t"/>`,
		"fallback": "mdi:bike-cargo",
	});
}

export default Component;
