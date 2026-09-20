import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox_ekubta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox_ekubta"/>`,
		"fallback": "mdi:ethernet-cable-off",
	});
}

export default Component;
