import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu9fh_blg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu9fh_blg"/>`,
		"fallback": "pixelarticons:ampersand-sharp",
	});
}

export default Component;
