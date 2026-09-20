import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltn6fn7xw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltn6fn7xw"/>`,
		"fallback": "ri:contrast-fill",
	});
}

export default Component;
