import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kudbe6bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kudbe6bvq"/>`,
		"fallback": "si:align-top-simple-line",
	});
}

export default Component;
