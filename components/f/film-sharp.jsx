import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atd8x-w7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atd8x-w7z"/>`,
		"fallback": "keyline-icons:film-sharp",
	});
}

export default Component;
