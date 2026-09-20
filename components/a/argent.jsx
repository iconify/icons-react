import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmablib0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmablib0a"/>`,
		"fallback": "token:argent",
	});
}

export default Component;
