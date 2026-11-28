import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idjh8_b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idjh8_b1f"/>`,
		"fallback": "noviair:basket-minus",
	});
}

export default Component;
