import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awcdb7b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awcdb7b-p"/>`,
		"fallback": "simple-icons:fluke",
	});
}

export default Component;
