import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dum2c-ydw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dum2c-ydw"/>`,
		"fallback": "hugeicons:cursor-edit-01",
	});
}

export default Component;
