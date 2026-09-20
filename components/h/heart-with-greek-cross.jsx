import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k685z7nro.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k685z7nro"/>`,
		"fallback": "pinhead:heart-with-greek-cross",
	});
}

export default Component;
