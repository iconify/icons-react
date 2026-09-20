import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6gzs_b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6gzs_b9z"/>`,
		"fallback": "uit:head-side",
	});
}

export default Component;
