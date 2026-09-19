import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvmbt8bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvmbt8bye"/>`,
		"fallback": "cbi:herman-miller-aeron",
	});
}

export default Component;
