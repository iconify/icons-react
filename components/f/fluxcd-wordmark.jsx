import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu-95fbbi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu-95fbbi"/>`,
		"fallback": "devicon-plain:fluxcd-wordmark",
	});
}

export default Component;
