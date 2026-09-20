import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgm81wbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgm81wbny"/>`,
		"fallback": "tabler:hexagon-letter-i-filled",
	});
}

export default Component;
