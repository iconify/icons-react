import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex7-f_rng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex7-f_rng"/>`,
		"fallback": "vadivam:chart-no-axes-column",
	});
}

export default Component;
