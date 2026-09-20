import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz3575bts.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz3575bts"/>`,
		"fallback": "jam:cog-f",
	});
}

export default Component;
