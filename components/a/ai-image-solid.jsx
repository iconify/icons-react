import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvk-gab_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvk-gab_b"/>`,
		"fallback": "iconaut:ai-image-solid",
	});
}

export default Component;
