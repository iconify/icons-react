import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8m26mgwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8m26mgwp"/>`,
		"fallback": "noviair:file-text-search",
	});
}

export default Component;
