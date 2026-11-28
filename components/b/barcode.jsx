import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfn44r7ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfn44r7ax"/>`,
		"fallback": "noviair-light:barcode",
	});
}

export default Component;
