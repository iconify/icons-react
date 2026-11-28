import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o886_iy8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o886_iy8g"/>`,
		"fallback": "noviair-light:download-x",
	});
}

export default Component;
