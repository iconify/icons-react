import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tovo4ccsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tovo4ccsx"/>`,
		"fallback": "mdi:file-settings",
	});
}

export default Component;
