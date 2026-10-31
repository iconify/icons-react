import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0jr5uboz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0jr5uboz"/>`,
		"fallback": "pinhead:eaved-open-gabled-building-with-chimney",
	});
}

export default Component;
