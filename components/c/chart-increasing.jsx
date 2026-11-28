import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvc5jnbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvc5jnbje"/>`,
		"fallback": "noviair-light:chart-increasing",
	});
}

export default Component;
