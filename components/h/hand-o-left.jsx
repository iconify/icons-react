import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn38qzb0f.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn38qzb0f"/>`,
		"fallback": "fa:hand-o-left",
	});
}

export default Component;
