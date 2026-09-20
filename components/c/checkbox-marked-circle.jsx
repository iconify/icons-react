import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rose2n_gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rose2n_gr"/>`,
		"fallback": "mdi:checkbox-marked-circle",
	});
}

export default Component;
