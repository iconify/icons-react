import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4qwoob-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4qwoob-p"/>`,
		"fallback": "feather:align-center",
	});
}

export default Component;
