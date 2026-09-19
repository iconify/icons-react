import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu6xx9mid.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu6xx9mid"/>`,
		"fallback": "fontisto:comment",
	});
}

export default Component;
