import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgxe34zhk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgxe34zhk"/>`,
		"fallback": "devicon-plain:codeigniter-wordmark",
	});
}

export default Component;
