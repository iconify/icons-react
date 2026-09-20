import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpidyrg8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpidyrg8l"/>`,
		"fallback": "stash:expand-diagonal",
	});
}

export default Component;
