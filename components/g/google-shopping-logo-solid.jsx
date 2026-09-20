import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlcn8qbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hlcn8qbio"/>`,
		"fallback": "streamline-logos:google-shopping-logo-solid",
	});
}

export default Component;
