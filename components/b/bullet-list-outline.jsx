import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da9s7nibg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da9s7nibg"/>`,
		"fallback": "cuida:bullet-list-outline",
	});
}

export default Component;
