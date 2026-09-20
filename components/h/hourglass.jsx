import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teihqdf3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teihqdf3z"/>`,
		"fallback": "prime:hourglass",
	});
}

export default Component;
