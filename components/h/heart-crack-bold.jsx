import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oey6ny_di.css';
import '../../css/u/uv5m79ypg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oey6ny_di"/><path class="uv5m79ypg"/>`,
		"fallback": "solar:heart-crack-bold",
	});
}

export default Component;
