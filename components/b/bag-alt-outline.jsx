import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0jrkyu8i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0jrkyu8i"/>`,
		"fallback": "teenyicons:bag-alt-outline",
	});
}

export default Component;
