import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi8f3ubar.css';
import '../../css/u/u69h-uyii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi8f3ubar"/><path class="u69h-uyii"/>`,
		"fallback": "pixelarticons:github-2",
	});
}

export default Component;
