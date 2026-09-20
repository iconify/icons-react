import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lihl_43df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lihl_43df"/>`,
		"fallback": "mdi:fridge-industrial",
	});
}

export default Component;
