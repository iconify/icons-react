import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf9y1byy.css';
import '../../css/o/oo7eexbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuf9y1byy"/><path class="oo7eexbml"/>`,
		"fallback": "solar:forbidden-bold",
	});
}

export default Component;
