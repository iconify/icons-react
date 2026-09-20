import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd7hr0a1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd7hr0a1y"/>`,
		"fallback": "tabler:brand-stack-ofverflow",
	});
}

export default Component;
