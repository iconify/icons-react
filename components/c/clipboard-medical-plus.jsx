import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw1kw4huw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw1kw4huw"/>`,
		"fallback": "noviair:clipboard-medical-plus",
	});
}

export default Component;
