import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpj-9pbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpj-9pbfz"/>`,
		"fallback": "thesvg-color:helly-hansen",
	});
}

export default Component;
