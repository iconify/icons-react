import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjsjj9bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjsjj9bph"/>`,
		"fallback": "tabler:dialpad",
	});
}

export default Component;
