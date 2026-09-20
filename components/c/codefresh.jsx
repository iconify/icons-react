import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv04xxbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv04xxbvz"/>`,
		"fallback": "thesvg-color:codefresh",
	});
}

export default Component;
