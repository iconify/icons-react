import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmscxibfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmscxibfq"/>`,
		"fallback": "noviair-light:columns-3",
	});
}

export default Component;
