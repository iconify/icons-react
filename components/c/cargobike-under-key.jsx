import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1l5dhiww.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1l5dhiww"/>`,
		"fallback": "pinhead:cargobike-under-key",
	});
}

export default Component;
