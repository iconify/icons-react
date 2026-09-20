import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol24cq_hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol24cq_hg"/>`,
		"fallback": "keyline-icons:chart-line-sharp-fill",
	});
}

export default Component;
