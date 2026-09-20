import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmim_580v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmim_580v"/>`,
		"fallback": "mdi:file-clock-outline",
	});
}

export default Component;
