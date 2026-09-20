import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn-j478mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn-j478mm"/>`,
		"fallback": "token:ggp",
	});
}

export default Component;
