import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k600kgb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k600kgb0c"/>`,
		"fallback": "material-icon-theme:conduct",
	});
}

export default Component;
