import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvf-84bqy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvf-84bqy"/>`,
		"fallback": "garden:face-very-happy-stroke-12",
	});
}

export default Component;
