import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx1wcc53c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx1wcc53c"/>`,
		"fallback": "mdi:human-non-binary",
	});
}

export default Component;
