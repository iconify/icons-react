import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdt-6nblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdt-6nblp"/>`,
		"fallback": "tabler:currency-cent",
	});
}

export default Component;
