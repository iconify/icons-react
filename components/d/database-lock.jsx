import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sef8m5cia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sef8m5cia"/>`,
		"fallback": "mdi:database-lock",
	});
}

export default Component;
