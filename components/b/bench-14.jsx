import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayk2_7bcq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayk2_7bcq"/>`,
		"fallback": "osmic:bench-14",
	});
}

export default Component;
