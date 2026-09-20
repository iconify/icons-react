import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmkw9x26d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmkw9x26d"/>`,
		"fallback": "mdi:account-settings-variant",
	});
}

export default Component;
