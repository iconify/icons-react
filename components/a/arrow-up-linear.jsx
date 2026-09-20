import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufif6wbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufif6wbzs"/>`,
		"fallback": "solar:arrow-up-linear",
	});
}

export default Component;
