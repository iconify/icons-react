import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvyge7eet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvyge7eet"/>`,
		"fallback": "thesvg:foxtel",
	});
}

export default Component;
