import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf44gr3hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf44gr3hp"/>`,
		"fallback": "iconamoon:exit-thin",
	});
}

export default Component;
