import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml_lf0bzy.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml_lf0bzy"/>`,
		"fallback": "maki:gift-11",
	});
}

export default Component;
