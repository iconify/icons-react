import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk0u74sbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk0u74sbl"/>`,
		"fallback": "noviair-light:cassette",
	});
}

export default Component;
