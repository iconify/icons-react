import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kat_4fb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kat_4fb8t"/>`,
		"fallback": "iconamoon:home-thin",
	});
}

export default Component;
