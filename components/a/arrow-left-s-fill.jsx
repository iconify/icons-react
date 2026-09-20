import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk09nrg1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk09nrg1a"/>`,
		"fallback": "ri:arrow-left-s-fill",
	});
}

export default Component;
