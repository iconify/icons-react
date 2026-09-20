import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrah4su8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrah4su8t"/>`,
		"fallback": "mdi:dialogue-minus",
	});
}

export default Component;
