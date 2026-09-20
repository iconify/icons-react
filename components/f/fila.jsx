import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms_7ga3th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms_7ga3th"/>`,
		"fallback": "thesvg:fila",
	});
}

export default Component;
