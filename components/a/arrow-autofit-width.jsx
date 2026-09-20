import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_cyp9b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_cyp9b-x"/>`,
		"fallback": "tabler:arrow-autofit-width",
	});
}

export default Component;
