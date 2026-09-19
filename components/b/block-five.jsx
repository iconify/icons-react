import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5we_2bdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5we_2bdz"/>`,
		"fallback": "icon-park-outline:block-five",
	});
}

export default Component;
