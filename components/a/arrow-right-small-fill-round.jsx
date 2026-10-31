import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alvyp9n1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alvyp9n1f"/>`,
		"fallback": "coolicons:arrow-right-small-fill-round",
	});
}

export default Component;
