import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpod5-wad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zpod5-wad"/>`,
		"fallback": "iconaut:git-compare-duotone",
	});
}

export default Component;
