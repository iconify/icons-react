import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb7ms080d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb7ms080d"/>`,
		"fallback": "dinkie-icons:file-cabinet",
	});
}

export default Component;
