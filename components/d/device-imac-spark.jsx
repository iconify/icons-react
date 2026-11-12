import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j10_t9shp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j10_t9shp"/>`,
		"fallback": "tabler:device-imac-spark",
	});
}

export default Component;
