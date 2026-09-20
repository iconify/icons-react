import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao_6u9ujf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao_6u9ujf"/>`,
		"fallback": "tabler:filter",
	});
}

export default Component;
