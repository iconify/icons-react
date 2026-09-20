import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maer_5kur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maer_5kur"/>`,
		"fallback": "mdi:button-pointer",
	});
}

export default Component;
